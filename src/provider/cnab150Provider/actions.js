export async function addRegistro(dispatch, registro) {
    dispatch({ type: 'add', registro })
}

export async function removeRegistro(dispatch, id) {
    dispatch({ type: 'remove', id })
}
