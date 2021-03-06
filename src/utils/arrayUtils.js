
import { v4 as uuidv4 } from 'uuid'

export const removeInArrayById = (arr, id) => (arr.filter(ele => (ele.id !== id)))

export const addInArrayWithId = (arr, ele, midle) => {
  return midle ? addInMidle(arr, ele) : ([...arr, { id: uuidv4(), ...ele }])
}
export const addInMidle = (arr, ele) => {
  const length = arr.length
  arr = [...arr.slice(0, length - 1), { id: uuidv4(), ...ele }, arr[length - 1]]
  return arr
}

export const reorderArray = (arr, startIndex, endIndex) => {
  const result = Array.from(arr)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

export const replaceInArray = (arr, id, newElement) => {
  const index = arr.findIndex((el) => el.id === id)
  arr[index] = { id: uuidv4(), ...newElement }
  return arr
}

export const editElement = (arr, idPai, id, value) => {
  arr.forEach(ele => {
    if (ele.id === idPai) {
      ele.data.forEach(data => {
        if (data.id === id) {
          data.valor = value
        }
      })
    }
  })
  return arr
}
