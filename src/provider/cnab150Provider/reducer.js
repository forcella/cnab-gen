import {
  addInArrayWithId,
  removeInArrayById,
  reorderArray,
  replaceInArray,
  editElement
} from '../../utils/arrayUtils'

export default function cnab150Reducer (state, action) {
  return {
    add: { registros: addInArrayWithId(state.registros, action.registro, action.addInMidle) },
    remove: { registros: removeInArrayById(state.registros, action.id) },
    replace: { registros: replaceInArray(state.registros, action.id, action.novoValor) },
    reorder: { registros: reorderArray(state.registros, action.inicio, action.fim) },
    edit: { registros: editElement(state.registros, action.idPai, action.id, action.valor) }
  }[action.type]
}
