import React from 'react'

import Slide from '@material-ui/core/Slide'

import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'

import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'

import { makeStyles } from '@material-ui/core/styles'

import Grid from '@material-ui/core/Grid'

import { useCbnab150Context } from '../../provider/cnab150Provider/provider'
import { removeRegistro } from '../../provider/cnab150Provider/actions'
import GeraCampo from '../../components/GeraCampo'

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(3),
    padding: '1ch'

  }
}))

function NovoRegistro (props) {
  const { data, id } = props?.registro

  const [show, setShow] = React.useState(true)
  const [direction, setDirection] = React.useState('right')

  const [, useCbnab150Dispatch] = useCbnab150Context()
  const classes = useStyles()

  const handleRemove = () => {
    removeRegistro(useCbnab150Dispatch, id, setShow, setDirection)
  }

  return (
    <Slide in={show} direction={direction}>
      <Paper elevation={3} className={classes.paper}>
        <Typography variant='subtitle1'>
          Registro: "{data[0]?.valor}"
        </Typography>
        <Grid container spacing={2}>
          {
                        data.map(registro => (
                          <GeraCampo key={registro.id} registro={registro} />
                        ))
                    }

          <Grid item xs={1}>
            <IconButton
              aria-label='delete'
              onClick={handleRemove}
            >
              <DeleteIcon fontSize='large' />
            </IconButton>
          </Grid>

        </Grid>
      </Paper>
    </Slide>
  )
}

export default NovoRegistro
