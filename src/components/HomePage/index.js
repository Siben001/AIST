import React from 'react'
import {Button, Jumbotron} from 'react-bootstrap'
import {Link} from 'react-router-dom'


export default () => {
  return (
    <div className='container'>
      <Jumbotron>
        <h1>Home</h1>
        <p><Link to={'/chaineditor'}><Button bsSize="large">Chain editor</Button></Link></p>
        <p><Link to={'/form/connectServices'}><Button bsSize="large">Form</Button></Link></p>
        <p><Link to={'/launcher'}><Button bsSize="large">Launcher</Button></Link></p>
        <p><Link to={'/formbuilder'}><Button bsSize="large">Form builder</Button></Link></p>
        <p><Link to={'/templatelist'}><Button bsSize="large">Template list</Button></Link></p>
      </Jumbotron>
    </div>
  )
}
