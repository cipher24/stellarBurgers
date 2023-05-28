const NORMA_URL = 'https://norma.nomoreparties.space/api';

const responseCheck = (response) => {
  return response.ok ? response.json() : response.json().then(e => Promise.reject(e))
}

export const getIngredients = () => {

  return fetch(`${NORMA_URL}/ingredients`)
        .then(responseCheck)
        .then(data => {
          return ((data)&&(data.success)) ? data.data : Promise.reject()
        });
};


export const postToServer = (ingredientsIds) => {
  return fetch( `${NORMA_URL}/orders`, {
    method: "POST",
    body: JSON.stringify({
      ingredients: ingredientsIds
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
    .then(responseCheck)
    .then(data => {
      return data.success ? data : Promise.reject()
    });
}







