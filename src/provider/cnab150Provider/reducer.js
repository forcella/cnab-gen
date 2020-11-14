import { addInArrayWithId, removeInArrayById, reorderArray, replaceInArray } from '../../utils/arrayUtils'

export default function cnab150Reducer (state, action) {
  // console.log(action.registro)
  switch (action.type) {
    case 'add': {
      return { registros: addInArrayWithId(state.registros, action.registro) }
    }
    case 'remove': {
      return { registros: removeInArrayById(state.registros, action.id) }
    }
    case 'replace': {
      return { registros: replaceInArray(state.registros, action.id, action.novoValor) }
    }
    case 'reorder': {
      return { registros: reorderArray(state.registros, action.inicio, action.fim) }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}
