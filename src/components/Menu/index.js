import React from 'react'

import Routes from '../../routes'
import { Link } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import IconButton from '@material-ui/core/IconButton'
import SaveIcon from '@material-ui/icons/Save'

import { saveFile } from '../../utils/fileUtils'

import { geraCnab } from '../../busines/Registro/GeraCnab'

const useStyles = makeStyles((theme) => ({
  breadcrumbs: {
    margin: 'auto'
  },
  saveButton: {
    color: 'white'
  }
}))

function Menu () {
  const classes = useStyles()

  const [data, setData] = React.useState([])

  const handleSave = () => {
    console.log(data)
    const dataAsText = geraCnab(data)
    saveFile(dataAsText)
    console.log(dataAsText)
  }

  const props = {
    getData (data) {
      setData(data)
    }
  }

  return (
    <>
      <AppBar position='static'>
        <Toolbar variant='dense'>
          <Breadcrumbs className={classes.breadcrumbs}>
            <Link color='inherit' to='/'>
              Cnab150
            </Link>
            <Link color='inherit' to='/cnab240'>
              Cnab240
            </Link>
          </Breadcrumbs>
          <IconButton aria-label='save' onClick={handleSave}>
            <SaveIcon className={classes.saveButton} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Routes {...props} />
    </>
  )
}

export default Menu
