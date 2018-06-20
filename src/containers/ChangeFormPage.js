import {connect} from 'react-redux'
import ChangeFormPage from '../components/ChangeFormPage'
import {fetchTemplateData, updateTemplate} from "../api";
import {
  templateFieldAdded,
  templateFieldRemoved,
  templateFieldUpdated,
  templateNameChanged}
  from "../actions";

function mapStateToProps(state) {
  return {
    templateInstance: state.template.templateInstance,
    notifications: state.notifications
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getTemplateData: (template) => dispatch(fetchTemplateData(template)),
    changeName: (name) => dispatch(templateNameChanged(name)),
    addField: (field) => dispatch(templateFieldAdded(field)),
    removeField: (index) => dispatch(templateFieldRemoved(index)),
    templateUpdate: (newField) => dispatch(templateFieldUpdated(newField)),
    updateTemplate: (template, oldName) => dispatch(updateTemplate(template, oldName)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangeFormPage)
