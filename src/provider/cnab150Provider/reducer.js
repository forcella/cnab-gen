import { addInArrayWithId, removeInArrayById } from "../../utils/arrayUtils"

export default function cnab150Reducer(state, action) {
    // console.log(action.registro)
    switch (action.type) {
        case 'add': {
            return { registros: addInArrayWithId(state.registros, action.registro) }
        }
        case 'remove': {
            return { registros: removeInArrayById(state.registros, action.id) }
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`)
        }
    }
}