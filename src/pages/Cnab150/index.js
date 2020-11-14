import React from 'react'

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'

import RegistroA from '../../components/RegistroA'

import EscolheTipoRegistro from '../../components/EscolheTipoRegistro'
import NovoRegistro from '../../components/NovoRegistro'

import { useCbnab150Context } from '../../provider/cnab150Provider/provider'

import { addRegistro, reordena } from '../../provider/cnab150Provider/actions'

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

  const handleAddRegistro = () => {
    addRegistro(useCbnab150Dispatch, {})
  }

  const handleOnDragEnd = result => {
    // dropped outside the list
    if (!result.destination) {
      return
    }
    reordena(useCbnab150Dispatch, result.source.index, result.destination.index)
  }

  const handleOnDrag = isDraggin => isDraggin ? 3 : 1

  return (
    <Container className={classes.mainContainer}>
      <RegistroA />

      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId='droppable'>
          {(provided, snapshot) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {useCnab150State.registros.map((item, index) => (
                <Draggable key={item.id} draggableId={'id' + item.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      {!item.data
                        ? <EscolheTipoRegistro
                            key={item.id} registro={item}
                            elevation={handleOnDrag(snapshot.isDragging)}

                          />
                        : <NovoRegistro
                            key={item.id} registro={item}
                            elevation={handleOnDrag(snapshot.isDragging)}
                          />}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

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
