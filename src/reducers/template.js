import {
  TEMPLATE_NAME_CHANGED,
  TEMPLATE_EDITOR_SUCCEED,
  TEMPLATE_FIELD_ADDED,
  TEMPLATE_FIELD_UPDATED,
  TEMPLATE_FIELD_REMOVED, TEMPLATE_DATA_GET_SUCCEED
} from '../constants'

const initialState = {
  templateInstance: {
    name: '',
    data: [],
  },
};

const templateReducer = (state = initialState, action) => {
  switch (action.type) {
    case TEMPLATE_EDITOR_SUCCEED: {
      return {
        ...state
      }
    }
    case TEMPLATE_NAME_CHANGED: {
      const templateInstance = {...state.templateInstance};
      templateInstance.name = action.payload;
      // templateInstance.modified = true;
      return {
        ...state,
        templateInstance,
      }
    }
    case TEMPLATE_FIELD_ADDED: {
      const templateInstance = {...state.templateInstance};
      templateInstance.data.push(action.payload);
      // templateInstance.modified = true;
      return {
        ...state,
        templateInstance
      }
    }
    case TEMPLATE_FIELD_UPDATED: {
      const templateInstance = {...state.templateInstance};
      const newData = action.payload;
      templateInstance.data[newData.ind][newData.formName] = newData.content;
      // templateInstance.modified = true;
      return {
        ...state,
        templateInstance,
      }
    }
    case TEMPLATE_FIELD_REMOVED: {
      const templateInstance = {...state.templateInstance};
      templateInstance.data.splice(action.payload, 1);
      return {
        ...state,
        templateInstance,
      }
    }
    case TEMPLATE_DATA_GET_SUCCEED: {
        var template = {...state.templateInstance};
        template = action.payload[0];
        const templateInstance = {
          name: template.name,
          data: Object.keys(template.data).map((label) => ({
            label: label,
            content: template.data[label]
          }))
        }
        return {
          ...state,
          templateInstance,
        }
      }
    default:
      return state
  }

};
export default templateReducer
