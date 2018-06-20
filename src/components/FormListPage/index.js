import React from 'react';
import {
  Button,
  Panel} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import axios from 'axios'
import "./style.css"

class FormListPage extends React.Component{

  state = {
    name: []
  }

  componentDidMount() {
    axios.get('http://localhost:3001/api/data_templates')
      .then(
      res => {
        const name = res.data;
        this.setState({name});
      })
  }

  render() {

  const TABLE_COLUMNS = [
    'Имя',
    'Количество значений'
  ]
  const createFormBtn = [
    <Link to={'/changeform'}><Button bsStyle="success" bsSize="large" className="pull-right">Create form</Button>
    <div className="clearfix"/></Link>
  ];

  const changeFormBtn = [
    <Button bsSize="xsmall" bsClass='changeBtn'>Change form</Button>
  ]

  const FormTable = ({data}) => {
    return(
      <tbody>
      {data.map((element, index) =>
        <tr key={index}>
          <td> {element.name} </td>
          <td className="text-center"> {element.n_rep} </td>
          <td> <Link to={'/changeform/' + element.name}>{changeFormBtn}<div className="clearfix"/></Link> </td>
        </tr>
      )}
      </tbody>
    )
  }

    var  count_data = [];
    var new_arr = this.state.name.map((elem) => elem.name)
    new_arr.forEach(function(i, ind) {
      count_data[ind] = {
        name: i,
        n_rep: (count_data[ind] ? count_data[ind].n_rep : 0)+ 1,
      }}
    )

    return (
      <div className='container'>
        <Panel header={createFormBtn}>
          <table>
              <tr>
                {TABLE_COLUMNS.map((element, index) =>
                  <th className="text-center" key={index}>{element}</th>
                )}
              </tr>
              <FormTable data={count_data} />
          </table>
        </Panel>
      </div>
    );
  }
}



export default FormListPage
