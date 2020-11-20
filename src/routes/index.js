import React from 'react'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'

import { Link, Route, Switch } from 'react-router-dom'

import Cnab150Provider from '../provider/cnab150Provider/provider'
import Cnab150 from '../pages/Cnab150'

function Routes () {
  return (
    <>
      <AppBar position='static'>
        <Toolbar variant='dense' style={{ margin: 'auto' }}>
          <Breadcrumbs>
            <Link color='inherit' to='/'>
              Cnab150
            </Link>

            <Link color='inherit' to='/cnab240'>
              Cnab240
            </Link>
          </Breadcrumbs>
        </Toolbar>
      </AppBar>

      <Switch>

        <Route exact path='/'>
          <Cnab150Provider>
            <Cnab150 />
          </Cnab150Provider>
        </Route>
      </Switch>
    </>
  )
}

export default Routes
