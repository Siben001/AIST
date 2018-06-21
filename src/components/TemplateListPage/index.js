import React from 'react';
import {
  Button,
  Panel} from 'react-bootstrap';
import "./style.css"

class TemplateListPage extends React.Component{

  componentDidMount() {
    this.props.getTemplateList()
  }

  render() {

    const {templateList} = this.props

    const TABLE_COLUMNS = [
    'Имя',
    'Количество значений'
  ]

    const createFormBtn = [
    <Button onClick={() => {
      window.location.hash = '#/template';
    }} bsStyle="success" bsSize="large" className="pull-right">Create form</Button>,
    <div className="clearfix"/>
  ];

    const changeFormBtn = (templateName) => [
      <Button onClick={() => {
        window.location.hash = `#/template/${templateName}`;
      }} bsSize="xs" bsClass='changeBtn'>Change form</Button>
    ]

    const FormTable = ({templateList}) => {
      return(
        <tbody>
        {templateList.map((element, index) =>
          <tr key={index}>
            <td> {element.name}</td>
            <td className="text-center"> {Object.keys(element.data).length}</td>
            <td> {changeFormBtn(element.name)}</td>
          </tr>
        )}
        </tbody>
      )}

    return (
      <div className='container'>
        <Panel header={createFormBtn}>
          <table>
            <thead>
              <tr>
                {TABLE_COLUMNS.map((element, index) =>
                  <th key={index}>{element}</th>
                )}
              </tr>
            </thead>
            <FormTable templateList={templateList} />
          </table>
        </Panel>
      </div>
    );
  }
}



export default TemplateListPage
