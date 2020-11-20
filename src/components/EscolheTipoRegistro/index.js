import React from 'react'

import Slide from '@material-ui/core/Slide'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Paper from '@material-ui/core/Paper'

import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'

import { makeStyles } from '@material-ui/core/styles'

import Grid from '@material-ui/core/Grid'

import { geraRegistro } from '../../busines/Registro/TipoRegistro'

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(3),
    padding: '1ch'

  },
  formControl: {
    minWidth: '100%'
  }
}))

function EscolheTipoRegistro (props) {
  const { id } = props?.registro
  const { elevation, onChange, onRemove, options } = props
  const classes = useStyles()

  const [tipoRegistro, setTipoRegistro] = React.useState('')
  const [show, setShow] = React.useState(true)
  const [direction, setDirection] = React.useState('right')

  const handleChange = async (event) => {
    const { value } = event.target
    const registro = geraRegistro(value)
    setTipoRegistro(value)
    onChange(id, registro, animationCallBack)
  }

  const handleRemove = () => {
    onRemove(id, animationCallBack)
  }

  const animationCallBack = () => {
    setDirection('left')
    setShow(false)
  }

  return (
    <Slide in={show} direction={direction}>
      <Paper elevation={elevation} className={classes.paper}>
        <Grid container>
          <Grid item xs={11}>
            <FormControl className={classes.formControl}>
              <InputLabel id='demo-simple-select-label'>Adicionar Tipo de Registro</InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={tipoRegistro}
                onChange={handleChange}
              >
                {
                  options.map(op => (
                    <MenuItem
                      key={op.value}
                      value={op.value}
                      disabled={op.disabled}
                    >
                      {`"${op.value}" - ${op.label}`}
                    </MenuItem>
                  ))
                }
              </Select>
            </FormControl>
          </Grid>
          <div style={{ position: 'absolute', right: '8ch' }}>
            <IconButton
              aria-label='delete'
              className={classes.margin}
              onClick={handleRemove}

            >
              <DeleteIcon fontSize='large' />
            </IconButton>
          </div>
        </Grid>
      </Paper>
    </Slide>
  )
}

export default EscolheTipoRegistro
