export function postToUrl(path, params) {

  var form = document.createElement('form');
  form.setAttribute('method', 'post');
  form.setAttribute('action', path);

  for (var key in params) {
    if (params.hasOwnProperty(key)) {
      const field = document.createElement('input');
      field.setAttribute('type', 'hidden');
      field.setAttribute('name', key);
      field.setAttribute('value', params[key]);

      form.appendChild(field);
    }
  }

  document
    .body
    .appendChild(form);
    
  form.submit();
}