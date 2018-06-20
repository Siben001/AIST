import {combineReducers} from 'redux'
import {reducer as notifications} from 'react-notification-system-redux';
import ui from './ui'
import form from './form'
import scheduleForm from './scheduleForm'
import formTemplate from './formTemplate'
import chainTemplates from './chainTemplates'
import test from './test'
import dataTemplate from './dataTemplate'
import formBuilder from './formBuilder'
import launcher from "./launcher";
import template from "./template"



const rootReducer = combineReducers({
  ui: ui,
  launcher: launcher,
  form: form,
  scheduleForm: scheduleForm,
  template,
  formTemplate,
  chainTemplates,
  test,
  dataTemplate,
  formBuilder,
  notifications,
});

export default rootReducer