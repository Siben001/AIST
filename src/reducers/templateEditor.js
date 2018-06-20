import {
  TEMPLATE_DATA_GET_SUCCEED,
} from '../constants'

const initialState = {
  templateInstance: {
    name: '',
    data: [],
    modified: false,
  },
};

const templateEditorReducer = (state = initialState, action) => {
  switch (action.type) {
    case   TEMPLATE_DATA_GET_SUCCEED: {
      var template = {...state.templateInstance};
      template = action.payload[0];
      const templateInstance = {
        name: template.name,
        data: Object.keys(template.data).map((label) => ({
          label: label,
          content: template.data[label]
        }))
      }
      // templateInstance.modified = true;
      return {
        ...state,
        templateInstance,
      }
    }
    default:
      return state
  }

};
export default templateEditorReducer
