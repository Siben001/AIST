import {
  TEST_BLOCK_MOVED,
  FORM_INPUT_CHANGE,
  CHAIN_SELECTED,
  FORM_TEMPLATE_FETCH_SUCCSEED,
  FORM_TEMPLATE_FETCH_FAIL,
  CHAIN_EDITOR_TEMPLATE_FETCH_SUCCEED,
  SCHEDULE_DATE_CHANGED,
  CHAIN_EDITOR_TEMPLATE_FETCH_FAIL, SCHEDULE_TIME_CHANGED,
  TEST_FETCH_SUCCEED,
  TEST_FETCH_FAIL,
  DATA_TEMPLATE_LIST_SUCCEED,
  DATA_TEMPLATE_LIST_FAIL,
  CHAIN_TEMPLATE_DELETED,
  CHAIN_TEMPLATE_ADDED,
  CHAIN_TEMPLATE_NAME_CHANGED,
  TEST_BLOCK_CLICKED,
  CLOSE_BUTTON_CLICKED,
  SUBMIT_CHAIN_TEMPLATE_FAIL,
  SUBMIT_CHAIN_TEMPLATE_SUCCEED,
  FORM_BUILDER_CHAINS_FETCH_SUCCEED,
  FORM_BUILDER_CHAINS_FETCH_FAIL,
  UPDATE_CHAIN_FORM_SUCCEED,
  UPDATE_CHAIN_FORM_FAIL,
  NEW_FIELD_ADDED,
  ON_FIELDS_VALUES_UPDATE,
  FIELD_WAS_REMOVED,
  SCHEDULE_AMOUNT_OF_TIMES_CHANGED,
  SUBMIT_BUTTON_CLICKED,
  TEMPLATE_FORM_INPUT_CHANGE,
  TEMPLATE_NAME_CHANGED,
  TEMPLATE_EDITOR_SUCCEED,
  TEMPLATE_EDITOR_FAIL,
  TEMPLATE_FIELD_ADDED,
  TEMPLATE_FIELD_REMOVED,
  TEMPLATE_FIELD_UPDATED,
  SUBMIT_NEW_TEMPLATE_SUCCEED,
  SUBMIT_NEW_TEMPLATE_FAILED,
  TEMPLATE_DATA_GET_FAILED,
  TEMPLATE_DATA_GET_SUCCEED, TEMPLATE_LIST_SUCCEED, TEMPLATE_LIST_FAILED
} from './constants'

export const selectChainForm =(payload)=> ({
  type: CHAIN_SELECTED,
  payload: payload
});

export const updateChainFormSucceed = (payload) => ({
  type: UPDATE_CHAIN_FORM_SUCCEED,
  payload: payload
});

export const updateChainFormFail = () => ({
  type: UPDATE_CHAIN_FORM_FAIL,
});

export const onFormInputChange = (value, paramName, formName) => ({
  type: FORM_INPUT_CHANGE,
  payload: {value, paramName, formName}
});

export const onTemplateFormInputChange = (value, paramName, formName) => ({
  type: TEMPLATE_FORM_INPUT_CHANGE,
  payload: {value, paramName, formName}
});

export const testBlockMoved = (payload) => ({
  type: TEST_BLOCK_MOVED,
  payload: payload
});

export const formTemplateFetchSuccseed = (payload) => ({
  type: FORM_TEMPLATE_FETCH_SUCCSEED,
  payload: payload
});

export const chainTemplateNameChanged = (payload) => ({
  type: CHAIN_TEMPLATE_NAME_CHANGED,
  payload: payload
});

export const deleteChainTemplate = (payload) => ({
  type: CHAIN_TEMPLATE_DELETED,
  payload: payload
});

export const addChainTemplate = () => ({
  type: CHAIN_TEMPLATE_ADDED
});

export const formTemplateFetchFail = (payload) => ({
  type: FORM_TEMPLATE_FETCH_FAIL,
  payload: payload
});
export const chainEditorTemplateFetchSucceed = (payload) => ({
  type: CHAIN_EDITOR_TEMPLATE_FETCH_SUCCEED,
  payload: payload
});
export const chainEditorTemplateFetchFail = (payload) => ({
  type: CHAIN_EDITOR_TEMPLATE_FETCH_FAIL,
  payload: payload
})
export const testsListTemplateFetchSucceed = (payload) => ({
  type: TEST_FETCH_SUCCEED,
  payload: payload
});
export const testsListTemplateFetchFail = (payload) => ({
  type: TEST_FETCH_FAIL,
  payload: payload
});
export const testBlockClicked = (payload) => ({
  type: TEST_BLOCK_CLICKED,
  payload: payload
});
export const closeButtonClicked = (payload) => ({
  type: CLOSE_BUTTON_CLICKED,
  payload: payload
});

export const submitChainTemplateFail = (payload) => ({
  type: SUBMIT_CHAIN_TEMPLATE_FAIL,
  payload: payload
});
export const submitChainTemplateSucceed = (payload) => ({
  type: SUBMIT_CHAIN_TEMPLATE_SUCCEED,
  payload: payload
});

export const changeDate = (payload) => ({
  type: SCHEDULE_DATE_CHANGED,
  payload: payload
});
export const changeTime = (payload) => ({
    type: SCHEDULE_TIME_CHANGED,
    payload: payload
})
export const changeAmountOfTimes = (payload) => ({
  type: SCHEDULE_AMOUNT_OF_TIMES_CHANGED,
  payload: payload
})

export const dataTemplateFetchFail = (payload) => ({
  type: DATA_TEMPLATE_LIST_FAIL,
  payload: payload
});
export const dataTemplateFetchSucceed = (payload) => ({
  type: DATA_TEMPLATE_LIST_SUCCEED,
  payload: payload
});
export const formBuilderChainsFetchSucceed = (payload) => ({
  type: FORM_BUILDER_CHAINS_FETCH_SUCCEED,
  payload: payload
});
export const formBuilderChainsFetchFail = (payload) => ({
  type: FORM_BUILDER_CHAINS_FETCH_FAIL,
  payload: payload
});
export const newFieldAdded = (payload) => ({
  type: NEW_FIELD_ADDED,
  payload: payload
});
export const onFieldsValuesUpdate = (payload) => ({
  type: ON_FIELDS_VALUES_UPDATE,
  payload: payload
});
export const fieldWasRemoved = (payload) => ({
  type: FIELD_WAS_REMOVED,
  payload: payload
});

export const templateNameChanged = (payload) => ({
  type: TEMPLATE_NAME_CHANGED,
  payload: payload
});

export const templateEditorFetchSucceed = (payload) => ({
  type: TEMPLATE_EDITOR_SUCCEED,
  payload: payload
});

export const templateEditorFetchFail = (payload) => ({
  type: TEMPLATE_EDITOR_FAIL,
  payload: payload
})

export const templateFieldAdded = (payload) => ({
  type: TEMPLATE_FIELD_ADDED,
  payload: payload
})

export const templateFieldUpdated = (payload) => ({
  type: TEMPLATE_FIELD_UPDATED,
  payload: payload
})

export const templateFieldRemoved = (payload) => ({
  type: TEMPLATE_FIELD_REMOVED,
  payload: payload
})

export const submitNewTemplateSucceed = (payload) => ({
  type: SUBMIT_NEW_TEMPLATE_SUCCEED,
  payload: payload
});

export const submitNewTemplateFailed = (payload) => ({
  type: SUBMIT_NEW_TEMPLATE_FAILED,
  payload: payload
});

export const getTemplateDataSucceed = (payload) => ({
  type: TEMPLATE_DATA_GET_SUCCEED,
  payload: payload

})

export const getTemplateDataFailed = (payload) => ({
  type: TEMPLATE_DATA_GET_FAILED,
  payload: payload

})

export const getTemplateListSucceed = (templateList) => ({
  type: TEMPLATE_LIST_SUCCEED,
  templateList
})

export const getTemplateListFailed = () => ({
  type: TEMPLATE_LIST_FAILED
})

export const checkTemplateFetchSucceed = () => ({
  type: TEMPLATE_EDITOR_SUCCEED
})


export const chainSelected = (selectedChain) => ({
  type: CHAIN_SELECTED, selectedChain})
