import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Cnab150Provider from '../provider/cnab150Provider/provider'
import Cnab150 from '../pages/Cnab150'

function Routes (props) {
  return (
    <>
      <Switch>
        <Route exact path='/'>
          <Cnab150Provider>
            <Cnab150 {...props} />
          </Cnab150Provider>
        </Route>
      </Switch>
    </>
  )
}

export default Routes
