export function saveFile (text) {
  const a = document.createElement('a')
  a.style = 'display: none'
  document.body.appendChild(a)

  const blobData = new Blob([text], { type: 'text/plain' })
  const url = window.URL.createObjectURL(blobData)

  a.href = url
  a.download = `${new Date().getTime()}.txt`
  a.click()
  window.URL.revokeObjectURL(url)
  a.remove()
}
