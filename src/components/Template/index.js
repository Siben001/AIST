import React from 'react';
import {Button} from 'react-bootstrap';
import {
  Col,
  Row,
  Panel,
  InputGroup,
  FormGroup,
  ListGroupItem,
  FormControl,
  Glyphicon,
  Label, ListGroup
} from 'react-bootstrap';
import Notifications from 'react-notification-system-redux'
import './style.css'


class Template extends React.Component{

  state = {
    oldName: [],
    isNameError: false,
    isDataError: false,
    isDataDuplicate: false,
  }

  defaultText = 'Enter text'

  componentWillMount() {
    this.props.checkTemplate()
    const {oldName} = this.props
    this.setState({oldName})
  }

  updateName = (newName) => {
    this.props.changeName(newName.target.value);
  }

  addField = () => {
    const fieldToAdd = {
      label: "",
      content: "",
    };
    this.props.addField(fieldToAdd);
  }

  updateData = (formName, ind, event) => {
    const content = event.target.value
    this.props.templateUpdate({formName, ind, content})
  }

  removeData = (ind) => {
    return () => {
      this.props.removeField(ind)}
  }

  submitTemplate = () => {
    const {templateInstance} = this.props;
    const {oldName} = this.state;
    this.setState({
      isNameError: this.checkEmpty(templateInstance.name),
      isDataError: this.checkData(),
      isDataDuplicate: this.checkDataDuplicate()
    }, () => {
        const {isNameError, isDataError, isDataDuplicate} = this.state
        if (!isNameError && !isDataError && !isDataDuplicate) {
          this.props.updateTemplate(templateInstance, oldName)
          this.setState({oldName: templateInstance.name})}
    })
  }

  getValidateInput() {
    if (!this.checkEmpty(this.props.templateInstance.name))return 'success';
    return 'error'
  }

  getValidateData(label) {
    if (!this.checkLabel(label) && !this.checkEmpty(label)) return 'success'
    return 'error'
  }

  checkDataDuplicate = () => {
    const {templateInstance} = this.props;
    let err = []
    templateInstance.data.map((field) => {if (this.checkLabel(field.label) > 0) err.push(field)})
    if (err.length > 0) return true;
    return false
  }

  checkData = () => {
    const {templateInstance} = this.props;
    let err = []
    templateInstance.data.map((field) => {if (this.checkEmpty(field.label) > 0) err.push(field)})
    if (err.length > 0) return true;
    return false
  }

  checkLabel = (label) => {
    const templateData = this.props.templateInstance.data;
    const repeats = templateData.filter(entry => entry.label == label);
    if (repeats.length > 1) return true;
    return false
  }

  checkEmpty = (elem) => {
    if (elem.length == 0) return true;
    return false
  }

  renderNamePanel = () => {
    const {templateInstance} = this.props
    return (
        <Col md={7}>
          <FormGroup bsSize="large"
                     validationState={this.getValidateInput()}>
            <InputGroup>
              <InputGroup.Addon>Name</InputGroup.Addon>
              <FormControl
                type="text"
                value={templateInstance.name}
                placeholder={this.defaultText}
                onChange={this.updateName}/>
              <FormControl.Feedback/>
            </InputGroup>
          </FormGroup>
        </Col>

    );
  };

  fieldForm = (formName, val, ind, size) => {
    return (
      <Col md={size}>
        <InputGroup>
          <InputGroup.Addon>{formName}</InputGroup.Addon>
          <FormControl
            type="text"
            value={val}
            placeholder={this.defaultText}
            onChange={(e) => this.updateData(formName, ind, e)}/>
        </InputGroup>
      </Col>
    )
  }

  fieldRow = (field, index) => {
    const {label, content} = field
    return (
      <ListGroupItem key={index} bsStyle="success">
        <FormGroup
          validationState={this.getValidateData(label, index)}
        >
          <Row>
            <Col md={1}> <b>{index + 1}</b></Col>
            {this.fieldForm('label', label, index, 4)}
            {this.fieldForm('content', content, index, 4)}
            <Col md={1}>
              <Button onClick={this.removeData(index)}>
                <Glyphicon glyph='glyphicon glyphicon-remove'/>
              </Button>
            </Col>
          </Row>
        </FormGroup>
      </ListGroupItem>
    )
  }


  render() {

    let {templateInstance, notifications} = this.props;
    const {isNameError, isDataError, isDataDuplicate} = this.state
    const addFieldBtn = [
      <Button bsStyle="success" onClick={this.addField}><Glyphicon glyph="plus"/></Button>
    ]

    const SubmitBtn = [
      <Button bsSize="large" bsStyle="success" onClick={this.submitTemplate}>Submit</Button>
    ]

    return (
      <div className='container'>
        {isNameError ? <div className="error-message">Please, enter name of template</div>: null}
        {isDataError ? <div className="error-message">Please, enter name of label</div>: null}
        {isDataDuplicate ? <div className="error-message">Names of labels should be unique</div>: null}
        <Panel key="mainPanel" header={
          <div>
            {this.renderNamePanel()}
            {SubmitBtn}
          </div>}
               footer={addFieldBtn}>
          <Row>
            <div>
              <ListGroup style={{height: '70vh', overflow: 'auto'}}>
                {templateInstance.data.map((row, ind) => this.fieldRow(row, ind))}
              </ListGroup>
            </div>
          </Row>
          <Notifications notifications={notifications}/>
        </Panel>
      </div>
    )
  }
}

export default Template
