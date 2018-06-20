import React from 'react';
import {Row, Col, Button, FormGroup, FormControl, InputGroup} from 'react-bootstrap'
import axios from "axios/index";
import TemplateForm from "../../containers/TemplateForm";
import Form from "../../containers/Form";
import Template from "../Template"
import Notifications from 'react-notification-system-redux'


class ChangeFormPage extends React.Component {

  state = {
    oldName: ""
  }

  componentWillMount() {
    const {formName} = this.props.match.params
    const oldName = formName
    this.setState({oldName})
    this.props.getTemplateData(formName)
  }

  render() {

    const {templateInstance, changeName, addField, removeField, templateUpdate, updateTemplate, notifications} = this.props;
    const {oldName} = this.state
    return (
        <Template
          templateInstance={templateInstance}
          oldName = {oldName}
          changeName = {changeName}
          addField = {addField}
          removeField = {removeField}
          templateUpdate = {templateUpdate}
          updateTemplate = {updateTemplate}
          notifications = {notifications}
        />
    );
  }
}

export default ChangeFormPage
