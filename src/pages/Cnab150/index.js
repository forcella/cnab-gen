import React from 'react'

import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'

import Registros from '../../components/Registros'

import { useCbnab150Context } from '../../provider/cnab150Provider/provider'

import { addRegistro, reordena, subtistitui, removeRegistro } from '../../provider/cnab150Provider/actions'

import { geraRegistro, opcoesCnab150 } from '../../busines/Registro/TipoRegistro'

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    maxWidth: '100%'

  },
  addButton: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  }
}))

function Cbnab150 () {
  const classes = useStyles()

  const [useCnab150State, useCbnab150Dispatch] = useCbnab150Context()

  React.useEffect(() => {
    if (useCnab150State?.registros?.length === 0) addRegistro(useCbnab150Dispatch, geraRegistro('A'))
  }, [useCbnab150Dispatch, useCnab150State])

  const handleAddRegistro = () => {
    addRegistro(useCbnab150Dispatch, {})
  }

  const onReorder = result => {
    if (!result.destination) {
      return
    }
    reordena(useCbnab150Dispatch, result.source.index, result.destination.index)
  }

  const onRemove = (id, animationCallback) => {
    removeRegistro(useCbnab150Dispatch, id, animationCallback)
  }

  const onChange = (id, novoValor, animationCallback) => {
    subtistitui(useCbnab150Dispatch, id, novoValor, animationCallback)
  }

  return (
    <Container className={classes.mainContainer}>
      <Registros
        registros={useCnab150State?.registros}
        options={opcoesCnab150}
        onReorder={onReorder}
        onChange={onChange}
        onRemove={onRemove}
      />

      <Fab
        color='primary' aria-label='add'
        className={classes.addButton}
        onClick={handleAddRegistro}
      >
        <AddIcon />
      </Fab>
    </Container>

  )
}

export default Cbnab150
