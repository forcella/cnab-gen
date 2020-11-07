
export const removeInArrayById = (arr, id) => (arr.filter(ele => (ele.id != id)))
export const addInArrayWithId = (arr, ele) => ([{ id: new Date().getTime(), ...ele }, ...arr])
