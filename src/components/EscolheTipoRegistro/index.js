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

import { TIPO_REGISTROS } from '../../busines/Registro/ListaTiposRegistro'

import { useCbnab150Context } from '../../provider/cnab150Provider/provider'
import { subtistitui, removeRegistro } from '../../provider/cnab150Provider/actions'

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
  const { elevation } = props
  const classes = useStyles()

  const [tipoRegistro, setTipoRegistro] = React.useState('')
  const [show, setShow] = React.useState(true)
  const [direction, setDirection] = React.useState('right')
  const [, useCbnab150Dispatch] = useCbnab150Context()

  const handleChange = (event) => {
    const { value } = event.target
    setTipoRegistro(value)
    subtistitui(useCbnab150Dispatch, id, TIPO_REGISTROS[value], setShow, setDirection)
  }

  const handleRemove = () => {
    removeRegistro(useCbnab150Dispatch, id, setShow, setDirection)
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
                <MenuItem value='B'>"B" - Cancelamento de Débito</MenuItem>
                <MenuItem disabled value='C'>"C" - Ocorrências no Cancelamento do Débito Automático</MenuItem>
                <MenuItem disabled value='D'>"D" - Alterar / Cancelar Débito Automático</MenuItem>
                <MenuItem disabled value='J'>"J" - Confirmação de Processamento de Arquivos</MenuItem>
                <MenuItem disabled value='T'>"T" - Total de clientes debitados</MenuItem>
                <MenuItem disabled value='X'>"X" - Relação de Agências</MenuItem>

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
