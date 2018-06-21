import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {createBrowserHistory} from 'history'
import {Route, Switch} from 'react-router'
import {HashRouter} from 'react-router-dom'
import rootReducer from './reducers'
import HomePage from './containers/HomePage'
import ChainEditorPage from './containers/ChainEditorPage'
import FormPage from './containers/FormPage'
import LauncherPage from "./containers/LauncherPage";
import FormBuilderPage from "./containers/FormBuilderPage";
import TemplatePage from "./containers/Template"
import TemplateListPage from "./containers/TemplateListPage";
import TemplateEditorPage from "./containers/TemplateEditorPage";

import 'bootstrap/dist/css/bootstrap.min.css';

import 'font-awesome/css/font-awesome.min.css'
import './styles/main.css'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const history = createBrowserHistory()

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(
      thunk)
  ));

ReactDOM.render((
    <Provider store={store}>
      <div>

        <HashRouter history={history}>
          <Switch>
            <Route path="/chaineditor" component={ChainEditorPage}/>}
            <Route path="/form/:formName" component={FormPage}/>
            <Route path="/launcher" component={LauncherPage}/>
            <Route path="/formbuilder" component={FormBuilderPage}/>
            <Route path="/templatelist" component={TemplateListPage}/>
            <Route exact path="/template/:formName" component={TemplateEditorPage}/>
            <Route exact path="/template" component={TemplatePage}/>
            <Route exact path="/" component={HomePage}/>
          </Switch>
        </HashRouter>

      </div>
    </Provider>
  ),
  document.getElementById('root'));
