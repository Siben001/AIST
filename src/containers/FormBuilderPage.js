import {connect} from 'react-redux'
import FormBuilderPage from '../components/FormBuilderPage'
import {fetchBuilderChains, updateChainForm} from "../api";
import {
  newFieldAdded,
  onFieldsValuesUpdate,
  fieldWasRemoved,
} from "../actions";

function mapStateToProps(state) {
  return {
    formBuilderChains: state.formBuilder.formBuilderChains || [],
    notifications: state.notifications,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchBuilderChains: () => dispatch(fetchBuilderChains()),
    addField: (field) => dispatch(newFieldAdded(field)),
    updateFieldsValues: (some) => dispatch(onFieldsValuesUpdate(some)),
    submit: (name, fields, idx) => dispatch(updateChainForm(name, fields, idx)),
    removeField: (result) => dispatch(fieldWasRemoved(result)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormBuilderPage)
