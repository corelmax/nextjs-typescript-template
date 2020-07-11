export const postToUrl = (path, params) => {

  const form = document.createElement('form')
  form.setAttribute('method', 'post')
  form.setAttribute('action', path)

  for (const key in params) {
    if (params.hasOwnProperty(key)) {
      const field = document.createElement('input')
      field.setAttribute('type', 'hidden')
      field.setAttribute('name', key)
      field.setAttribute('value', params[key])

      form.appendChild(field)
    }
  }

  document
    .body
    .appendChild(form)

  form.submit()
}