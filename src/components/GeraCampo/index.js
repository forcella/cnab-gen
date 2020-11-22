import React from 'react'
import TextField from '@material-ui/core/TextField'
import MomentUtils from '@date-io/moment'
import { v4 as uuidv4 } from 'uuid'

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers'

import { makeStyles } from '@material-ui/core/styles'

import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(3),
    padding: '1ch'

  },
  date: {
    marginBottom: 0,
    marginTop: 0
  }
}))

const GeraCampo = (props) => {
  const { tipo, id, label, disabled } = props.registro
  const { idPai, onValueChange } = props

  const classes = useStyles()

  const [value, setValue] = React.useState(tipo === 'date' ? null : '')

  const handleValueChange = event => {
    const { target } = event
    if (event?._isAMomentObject) {
      const date = event.format('yyyyMMDD')
      setValue(date)
      onValueChange(idPai, id, date)
    } else {
      setValue(target.value)
      onValueChange(idPai, id, target.value)
    }
  }

  switch (tipo) {
    case 'text':
      return (
        <Grid item>
          <TextField id={uuidv4()} label={label} disabled={disabled} value={value} onChange={handleValueChange} />
        </Grid>
      )
    case 'number':
      return (
        <Grid item>
          <TextField id={uuidv4()} label={label} type={tipo} disabled={disabled} value={value} onChange={handleValueChange} />
        </Grid>
      )
    case 'date':
      return (
        <Grid item>
          <MuiPickersUtilsProvider utils={MomentUtils}>
            <KeyboardDatePicker
              className={classes.date}
              disableToolbar
              variant='inline'
              format='DD/MM/yyyy'
              margin='normal'
              id={id}
              label={label}
              value={value}
              onChange={handleValueChange}
              KeyboardButtonProps={{
                'aria-label': 'change date'
              }}
              disabled={disabled}
            />
          </MuiPickersUtilsProvider>
        </Grid>
      )
    default:
      return null
  }
}

export default GeraCampo
