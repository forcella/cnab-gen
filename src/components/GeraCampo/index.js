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

import { useCbnab150Context } from '../../provider/cnab150Provider/provider'
import { editaRegistro } from '../../provider/cnab150Provider/actions'

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
  const { idPai } = props

  const classes = useStyles()

  const [, useCbnab150Dispatch] = useCbnab150Context()
  const [value, setValue] = React.useState(tipo === 'date' ? null : '')

  const handleValueChange = event => {
    const { target } = event
    if (event?._isAMomentObject) {
      setValue(event.format('yyyyMMDD'))
    } else {
      setValue(target.value)
    }
  }

  React.useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (value) editaRegistro(useCbnab150Dispatch, idPai, id, value)
    }, 1000)
    return () => clearTimeout(delayDebounceFn)
  }, [value, id, idPai, useCbnab150Dispatch])

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
          <TextField id={uuidv4()} label={label} type={tipo} disabled={disabled} />
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
