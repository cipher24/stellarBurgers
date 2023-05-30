const NORMA_URL = 'https://norma.nomoreparties.space/api';

const responseCheck = (response) => {
  return response.ok ? response.json() : response.json().then(e => Promise.reject(e))
}

const successCheck = (data) => {
  return (data && data.success) ? data : Promise.reject()
}

const optionsToPost = (Ids) => {
  return Ids === null
    ? undefined
    : {
      method: "POST",
      body: JSON.stringify({
        ingredients: Ids
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }
}

export const requestNorma = (endpoint, ingredientsToPost = null) => {
  return fetch(`${NORMA_URL}/${endpoint}`, optionsToPost(ingredientsToPost))
    .then(responseCheck)
    .then(successCheck)
}








