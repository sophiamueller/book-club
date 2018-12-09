let baseUrl = process.env.REACT_APP_API_URL

export function getBooks() {
  return makeRequest('/books')
}

export function postBooks(book) {
  return makeRequest('/books', 'post', book).catch(err => console.error(err))
}

export function patchBooks(book) {
  return makeRequest(`/books/${book._id}`, 'patch', book).catch(err =>
    console.error(err)
  )
}

export function deleteBook(id) {
  return makeRequest(`/books/${id}`, 'delete').catch(err => console.error(err))
}

function makeRequest(path, method = 'get', body) {
  path = path.startsWith('/') ? path : '/' + path
  baseUrl = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl
  body = JSON.stringify(body)

  return fetch(baseUrl + path, {
    method: method.toUpperCase(),
    headers: ['post', 'patch'].includes(method)
      ? { 'Content-Type': 'application/json' }
      : {},
    body
  })
    .then(res => res.json())
    .catch(err => console.error(err))
}
