export async function addRegistro (dispatch, registro, addInMidle) {
  dispatch({ type: 'add', registro, addInMidle })
}

export async function removeRegistro (dispatch, id, animationCallBack) {
  animationCallBack && animationCallBack()

  setTimeout(() => {
    dispatch({ type: 'remove', id })
  }, 250)
}

export async function reordena (dispatch, inicio, fim) {
  dispatch({ type: 'reorder', inicio, fim })
}

export async function subtistitui (dispatch, id, novoValor, animationCallBack) {
  animationCallBack && animationCallBack()

  setTimeout(() => {
    dispatch({ type: 'replace', id, novoValor })
  }, 150)
}

export async function editaRegistro (dispatch, idPai, id, valor) {
  dispatch({ type: 'edit', id, idPai, valor })
}
