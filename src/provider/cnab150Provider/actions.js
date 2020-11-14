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

export async function reordena (dispatch, inicio, fim) {
  dispatch({ type: 'reorder', inicio, fim })
}

export async function subtistitui (dispatch, id, novoValor, setShow, setDirection) {
  setDirection('left')
  setShow(false)

  setTimeout(() => {
    dispatch({ type: 'replace', id, novoValor })
  }, 150)
}
