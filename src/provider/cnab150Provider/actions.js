export async function addRegistro (dispatch, registro) {
  dispatch({ type: 'add', registro })
}

export async function removeRegistro (dispatch, id, setShow, setDirection) {
  setDirection('left')
  setShow(false)
  setTimeout(() => {
    dispatch({ type: 'remove', id })
  }, 250)
}
