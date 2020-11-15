
export const removeInArrayById = (arr, id) => (arr.filter(ele => (ele.id !== id)))

export const addInArrayWithId = (arr, ele) => ([...arr, { id: new Date().getTime(), ...ele }])

export const reorderArray = (arr, startIndex, endIndex) => {
  const result = Array.from(arr)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

export const replaceInArray = (arr, id, newElement) => {
  const index = arr.findIndex((el) => el.id === id)
  arr[index] = { id: new Date().getTime(), ...newElement }
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
  console.log(arr)
  return arr
}
