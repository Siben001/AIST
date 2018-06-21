import {TEMPLATE_LIST_SUCCEED} from "../constants";

const initialState = {
  templateList: []
}

const templateListReducer = (state = initialState, action) => {
  switch (action.type) {
    case TEMPLATE_LIST_SUCCEED: {
      return (
        {
          ...state,
          templateList: action.templateList
        }
      )
    }
    default:
      return state;
  }
}

export default templateListReducer
