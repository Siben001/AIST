import {connect} from 'react-redux'
import Template from '../components/Template'
import {fetchTemplate, insertNewTemplate} from "../api";
import {
  templateNameChanged,
  templateFieldAdded,
  templateFieldRemoved,
  templateFieldUpdated, checkTemplateFetchSucceed,
} from "../actions";

function mapStateToProps(state) {
  return {
    templateInstance: state.template.templateInstance,
    notifications: state.notifications,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    checkTemplate: () => dispatch(checkTemplateFetchSucceed()),
    changeName: (name) => dispatch(templateNameChanged(name)),
    addField: (field) => dispatch(templateFieldAdded(field)),
    removeField: (index) => dispatch(templateFieldRemoved(index)),
    templateUpdate: (newField) => dispatch(templateFieldUpdated(newField)),
    updateTemplate: (template) => dispatch(insertNewTemplate(template)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Template)
