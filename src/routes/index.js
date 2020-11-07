import React from 'react'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

import { Link, Route, Switch } from 'react-router-dom'

import Cnab150 from '../pages/Cnab150'

function Routes () {
  return (
    <>
      <AppBar position='static'>
        <Toolbar variant='dense'>
          <Link color='inherit' to='/'>
            Cnab150
          </Link>
          <Link color='inherit' to='/cnab240'>
            Cnab240
          </Link>
        </Toolbar>
      </AppBar>

      <Switch>
        <Route exact path='/'><Cnab150 /></Route>
      </Switch>
    </>
  )
}

export default Routes
