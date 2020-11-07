import React from 'react'
import TextField from '@material-ui/core/TextField'
import MomentUtils from '@date-io/moment'
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
  const { tipo, id, label } = props.registro

  const classes = useStyles()
  const [selectedDate, setSelectedDate] = React.useState(null)

  const handleDateChange = (date) => {
    console.log(date)
    setSelectedDate(date)
  }

  switch (tipo) {
    case 'text':
      return (
        <Grid item>
          <TextField id={id} label={label} />
        </Grid>
      )
    case 'number':
      return (
        <Grid item>
          <TextField id={id} label={label} type={tipo} />
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
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date'
              }}
            />
          </MuiPickersUtilsProvider>
        </Grid>
      )
    default:
      return null
  }
}

export default GeraCampo
