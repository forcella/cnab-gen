export const geraCnab = arrCnab => {
  const cnabArrAsText = arrCnab?.map(value => {
    const dataAsString = value?.data?.map(el => {
      return zeroFill(el, ((el.fim + 1) - el.inicio))
    })
    return dataAsString ? dataAsString.join('') : null
  })

  return cnabArrAsText ? cnabArrAsText.join('\n') : null
}

function zeroFill (el, width = 0) {
  const valor = el ? el.valor : ''
  const tipo = el?.tipo

  const joinValue = tipo === 'number' ? '0' : ' '

  width -= `${valor}`.length
  return width > 0
    ? new Array(width + (/\./.test(valor) ? 2 : 1)).join(joinValue) + valor
    : valor + ''
}
