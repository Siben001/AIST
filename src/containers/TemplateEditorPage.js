import {connect} from 'react-redux'
import TemplateEditorPage from '../components/TemplateEditorPage'
import {fetchTemplateData, updateTemplate} from "../api";
import {
  checkTemplateFetchSucceed,
  templateFieldAdded,
  templateFieldRemoved,
  templateFieldUpdated,
  templateNameChanged
}
  from "../actions";

function mapStateToProps(state) {
  return {
    templateInstance: state.template.templateInstance,
    notifications: state.notifications,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getTemplateData: (template) => dispatch(fetchTemplateData(template)),
    checkTemplate: () => dispatch(checkTemplateFetchSucceed()),
    changeName: (name) => dispatch(templateNameChanged(name)),
    addField: (field) => dispatch(templateFieldAdded(field)),
    removeField: (index) => dispatch(templateFieldRemoved(index)),
    templateUpdate: (newField) => dispatch(templateFieldUpdated(newField)),
    updateTemplate: (template, oldName) => dispatch(updateTemplate(template, oldName)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TemplateEditorPage)
