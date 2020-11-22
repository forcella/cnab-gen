import React from 'react'

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

import EscolheTipoRegistro from '../EscolheTipoRegistro'
import NovoRegistro from '../NovoRegistro'

export default function Registros (props) {
  const { registros, onReorder, onChange, onValueChange, onRemove, options } = props

  const handleOnDrag = isDraggin => isDraggin ? 3 : 1

  return (
    <DragDropContext onDragEnd={onReorder}>
      <Droppable droppableId='droppable'>
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {registros.map((item, index) => (
              <Draggable key={item.id} draggableId={'id' + item.id} index={index}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    {!item.data
                      ? <EscolheTipoRegistro
                          onChange={onChange}
                          onRemove={onRemove}
                          options={options}
                          key={item.id} registro={item}
                          elevation={handleOnDrag(snapshot.isDragging)}
                        />
                      : <NovoRegistro
                          onChange={onChange}
                          onRemove={onRemove}
                          onValueChange={onValueChange}
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
  )
}
