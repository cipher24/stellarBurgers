const NORMA_URL = 'https://norma.nomoreparties.space/api';

const getIngredients = () => {

  return fetch(`${NORMA_URL}/ingredients`)
        .then(response => { 
          return response.ok ? response.json() : Promise.reject() })
        .then(data => {
          return ((data)&&(data.success)) ? data.data : Promise.reject()
        });
};

export default getIngredients;




