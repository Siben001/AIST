import {error, success} from "react-notification-system-redux"
//import axios from 'axios';
import {
  formTemplateFetchSuccseed,
  chainEditorTemplateFetchSucceed,
  chainEditorTemplateFetchFail,
  testsListTemplateFetchSucceed,
  testsListTemplateFetchFail,
  dataTemplateFetchSucceed,
  dataTemplateFetchFail,
  formTemplateFetchFail,
  submitChainTemplateFail,
  submitChainTemplateSucceed,
  formBuilderChainsFetchSucceed,
  formBuilderChainsFetchFail,
  updateChainFormSucceed,
  updateChainFormFail, templateEditorFetchSucceed, templateEditorFetchFail, submitNewTemplateSucceed,
  submitNewTemplateFailed, getTemplateDataFailed, getTemplateDataSucceed,
} from './actions'
import {BACKEND_URL, TEST_URL} from "./constants/endpoints";


const fetchUtil = (url, method = 'GET', data = {}) => {
  const options = {
    method: method,
    headers: {},
  };
  if (method === 'POST') {
    let header = new Headers();
    header.append('Content-Type','application/json');
    options.headers = header;
    options.body = data;
  }
  return fetch(url, options);
};


export const fetchFormTemplate = (formName) => (dispatch) => {
  const url = `${BACKEND_URL}/forms/${formName}`;

  fetchUtil(url).then(response => {
    if (response.ok) {
      return response.json()
    } else {
      console.log(response);
      throw new Error(response.statusText)
    }
  }).then(formTemplate => {
    if (formTemplate) {
      dispatch(formTemplateFetchSuccseed({
        formName: formName,
        formTemplate: formTemplate
      }))
    } else {
      dispatch(formTemplateFetchFail())
    }
  }).catch(error => {
    throw error
  })
};

export const updateChainForm = (chain,form,idx) => (dispatch) => {
  const url = `${BACKEND_URL}/`+chain+'/form';

  fetchUtil(url, 'POST', [form]).then(response => {
    if (response.ok) {
      return response.json()
    } else {
      throw new Error(response.statusText)
    }
  }).then(updateChainTemplateResult => {
    if (updateChainTemplateResult) {
      dispatch(success({message: "Submit succeeded"}));
      dispatch(updateChainFormSucceed(idx));
    } else {
      dispatch(error({message: "Submit failed with error:"}));
      dispatch(updateChainFormFail())
    }
  }).catch(error => {
    throw error
  })

  /*axios.post(url, form)
    .then(function () {
      console.log(form);
    })
    .catch(function () {
      console.log('fuck');
    });*/
};

export const fetchChainTemplates = () => (dispatch, getState) => {
  const url = `${BACKEND_URL}/chain_templates`;

  fetchUtil(url).then(response => {
    if (response.ok) {
      return response.json()
    } else {
      throw new Error(response.statusText)
    }
  }).then(chainTemplates => {
    if (chainTemplates) {
      dispatch(chainEditorTemplateFetchSucceed(chainTemplates))
    } else {
      dispatch(chainEditorTemplateFetchFail())
    }
  }).catch(error => {
    throw error
  })
};

export const fetchTests = () => (dispatch, getState) => {
  const url = `${BACKEND_URL}/tests`;
  const options = {
    method: 'GET',
    headers: {},
  };
  fetch(url, options).then(response => {
    if (response.ok) {
      return response.json()
    } else {
      throw new Error(response.statusText)
    }
  }).then(testsListTemplate => {
    if (testsListTemplate) {
      dispatch(testsListTemplateFetchSucceed(testsListTemplate))
    } else {
      dispatch(testsListTemplateFetchFail())
    }
  }).catch(error => {
    throw error
  })
};
export const fetchDataTemplatesList = () => {
  return (dispatch, getState) => {
    const url = `${BACKEND_URL}/data_templates`;
    const options = {
      method: 'GET',
      headers: {},
    };
    fetch(url, options).then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error(response.statusText)
      }
    }).then(templateDataList => {
      if (templateDataList) {
        dispatch(dataTemplateFetchSucceed(templateDataList))
      } else {
        dispatch(dataTemplateFetchFail())
      }
    }).catch(error => {
      throw error
    })
  }
};


export const updateChainTemplate = (chainTemplate) => (dispatch, getState) => {
  const url = `${BACKEND_URL}/chain_templates/${chainTemplate.name}`;
  let header = new Headers();
  header.append('Content-Type','application/json');
  const options = {
    method: 'POST',
    headers: header,
    body: chainTemplate
  };
  fetch(url, options).then(response => {
    if (response.ok) {
      return response.json()
    } else {
      throw new Error(response.statusText)
    }
  }).then(updateChainTemplateResult => {
    if (updateChainTemplateResult) {
      dispatch(success({message: "Submit succeeded"}));
      dispatch(submitChainTemplateSucceed(updateChainTemplateResult));
    } else {
      dispatch(error({message: "Submit failed with error:"}));
      //TODO return an error
      dispatch(submitChainTemplateFail())
    }
  }).catch(error => {
    throw error
  })
};

export const insertChainTemplate = (chainTemplate) => (dispatch, getState) => {
  const url = `${BACKEND_URL}/chain_templates`;
  let header = new Headers();
  header.append('Content-Type','application/json');
  const options = {
    method: 'PUT',
    headers: header,
    body: chainTemplate
  };
  fetch(url, options).then(response => {
    if (response.ok) {
      return response.json()
    } else {
      throw new Error(response.statusText)
    }
  }).then(updateChainTemplateResult => {
    if (updateChainTemplateResult) {
      dispatch(success({message: "Submit succeeded"}));
      dispatch(submitChainTemplateSucceed(updateChainTemplateResult));
      console.log({chainTemplate});
    } else {
      dispatch(error({message: "Submit failed with error:"}));
      //TODO return an error
      dispatch(submitChainTemplateFail())
    }
  }).catch(error => {
    throw error
  })
};

export const fetchBuilderChains = () => (dispatch, getState) => {
  const url = `${BACKEND_URL}/chain_templates`;
  const options = {
    method: 'GET',
    headers: {},
  };
  fetch(url, options).then(response => {
    if (response.ok) {
      return response.json()
    } else {
      console.log(response);
      throw new Error(response.statusText)
    }
  }).then(fetchBuilderChains => {
    if (fetchBuilderChains) {
      dispatch(formBuilderChainsFetchSucceed(fetchBuilderChains))
    } else {
      dispatch(formBuilderChainsFetchFail())
    }
  }).catch(error => {
    throw error
  })
};

export const fetchTemplate = (Template) => (dispatch, getState) => {
  const url = `${TEST_URL}/changeform`;
  if (Template) {
    url + `${Template.name}`;
  }

  fetchUtil(url).then(response => {
    if (response.ok) {
      return response
    } else {
      throw new Error(response.statusText)
    }
  }).then(Template => {
    if (Template) {
      dispatch(templateEditorFetchSucceed(Template))
    } else {
      dispatch(templateEditorFetchFail())
    }
  }).catch(error => {
    throw error
  })
};

export const insertNewTemplate = (Template) => (dispatch, getState) => {
  const url = `${BACKEND_URL}/data_templates`;
  let header = new Headers();
  header.append('Content-Type','application/json');
  const templateJson = getJson(Template)
  const options = {
    method: 'PUT',
    headers: header,
    body: templateJson
  };
  fetch(url, options).then(response => {
    if (response.ok) {
      return response.json()
    } else {
      throw new Error(response.statusText)
    }
  }).then(insertNewTemplateResult => {
    if (insertNewTemplateResult) {
      dispatch(success({message: "Submit succeeded"}));
      dispatch(submitNewTemplateSucceed(insertNewTemplateResult));
    }
  }).catch(err => {
    dispatch(error({message: "Submit failed with error: " + err.message}));
  })
};

export const fetchTemplateData= (templateName) => (dispatch, getState) => {
  const url = `${BACKEND_URL}/data_templates/${templateName}`;
  const options = {
    method: 'GET',
    headers: {},
  };
  fetch(url, options).then(response => {
    if (response.ok) {
      return response.json()
    } else {
      throw new Error(response.statusText)
    }
  }).then(TemplateData => {
    if (TemplateData) {
      dispatch(getTemplateDataSucceed(TemplateData))
    } else {
      dispatch(getTemplateDataFailed())
    }
  }).catch(err => {
    dispatch(error({message: "Page failed with error: " + err.message}));
  })
};

export const updateTemplate = (Template, TemplateName) => (dispatch, getState) => {
  const url = `${BACKEND_URL}/data_templates/${TemplateName}`;
  let header = new Headers();
  header.append('Content-Type','application/json');
  const templateJson = getJson(Template)
  const options = {
    method: 'POST',
    headers: header,
    body: templateJson
  };
  fetch(url, options).then(response => {
    if (response.ok) {
      return response.json()
    } else {
      throw new Error(response.statusText)
    }
  }).then(updateTemplateResult => {
    if (updateTemplateResult) {
      dispatch(success({message: "Submit succeeded"}));
      dispatch(submitNewTemplateSucceed(updateTemplateResult));
    }

  }).catch(err => {
    console.log(err)
    dispatch(error({message: "Submit failed with error: " + err.message}));
  })
};

const getJson = (templateInstance) => {
  var dataJson = {}
  templateInstance.data.map((fields) => (dataJson[fields.label] = fields.content))
  const templateJson = [{
    name: templateInstance.name,
    data: dataJson
  }]
  return(JSON.stringify(templateJson))
}
