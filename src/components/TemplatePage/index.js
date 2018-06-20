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


class Template extends React.Component {

  state = {
    templateInstance: {},
    error: {},
    isSubmitEnable: false,
    isError: false
  };

  defaultText = 'Enter text'

  componentDidMount() {
    console.log('ATATA')
    console.log(this.props)
    this.props.fetchTemplate();
    this.setState({templateInstance : this.props.templateInstance})
    this.state.error.data = []
  }
  //
  // componentWillUpdate() {
  //   console.log('ARARAR')
  // }

  updateName = (newName) => {
    this.props.changeName(newName.target.value);
  }

  updateData = (formName, ind, event) => {
    const content = event.target.value
    this.props.templateUpdate({formName, ind, content})

  }

  removeData = (ind) => {
    return () => {
      this.props.removeField(ind)}
  }

  // getError = () => {
  //   if (this.state.error.data.some(field => field == false))
  //     this.setState({isError: true})
  //
  // }

  // getSubmitState = () => {
  //   console.log('ararar' + this.state.error.name)
  //   if (this.state.error.name) {
  //     console.log(this.props.templateInstance.data.length > 0)
  //     if (this.props.templateInstance.data.length > 0) {
  //       const res = this.state.error.data.some(field => field == false)
  //       if (res) this.state.isSubmitEnable = true;
  //     }
  //     else {
  //       console.log('tratata')
  //       this.state.isSubmitEnable = true;}
  //   }
  //   this.state.isSubmitEnable = false;
  // }

  getValidateInput() {
    console.log(this.props)
    const lenght = this.props.templateInstance.name.length;
    this.state.isSubmitEnable = true
    if (lenght > 0) return 'success';
    this.state.isSubmitEnable = false
    return 'error'
  }

  getValidateData(label, ind) {
    // this.state.error.data[ind] = true
    const templateData = this.props.templateInstance.data;
    const lenght = label.length;
    const repeats = templateData.filter(entry => entry.label ==label);
    if (repeats.length == 1 && lenght != 0) {
      // this.getError();
      return 'success'}
    // this.state.error.data[ind] = false
    // this.getError()
    return 'error'
  }

  addField = () => {
    const fieldToAdd = {
      label: "",
      content: "",
    };
    this.props.addField(fieldToAdd);
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
    this.state.error.data = []
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

  submitTemplate = () => {
    const {templateInstance} = this.props;
    console.log(templateInstance)
    this.props.insertNewTemplate(templateInstance)
  }


  render() {
    console.log('ARARAR')
    console.log(this.props)
    var {templateInstance, notifications} = this.props;
    const addFieldBtn = [
      <Button bsSize="primary" bsStyle="success" onClick={this.addField}><Glyphicon glyph="plus"/></Button>
    ]

    // const SubmitBtn = [
    //   <Button bsSize="large" bsStyle="success" disabled={!this.state.isSubmitEnable}>Submit</Button>
    // ]


    return (
      <div className='container'>
        {(this.state.isError) ? <div className="error-message">ERROR</div>: null}
        <Panel header={
          <div>
            {this.renderNamePanel()}
            <Button bsSize="large" bsStyle="success" onClick={this.submitTemplate}>Submit</Button>
          </div>}
               footer={addFieldBtn}>
          <Row>
            <div>
              <ListGroup style={{height: '80vh', overflow: 'auto'}}>
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
