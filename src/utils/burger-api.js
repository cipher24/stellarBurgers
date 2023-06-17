import { getCookie } from './cookie';
import { updateTokens } from './update-tokens';


const NORMA_URL = 'https://norma.nomoreparties.space/api';

const responseCheck = (response) => {
  return response.ok ? response.json() : response.json().then(e => Promise.reject(e))
}

const successCheck = (data) => {
  return (data && data.success) ? data : Promise.reject()
}

const optionsGenerator = (method, payload) => {
  switch (method) {
    case null:
    case "GET": {
      return {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: "Bearer " + getCookie('token')
        }
      }
    }
    case "POST": {
      return {
        method: "POST",
        body: payload ? JSON.stringify(payload) : '',
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: "Bearer " + getCookie('token')
        }
      }
    }
    case "PATCH": {
      return {
        method: "PATCH",
        body: payload ? JSON.stringify(payload) : '',
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: "Bearer " + getCookie('token')
        }
      }
    }

  }
}

export const requestNorma = (endpoint, method = null, payload = null) => {
  return fetchWithRefresh(`${NORMA_URL}/${endpoint}`, optionsGenerator(method, payload))
    // .then(responseCheck)
    .then(successCheck)
}
/* export const requestNormaSimple = (endpoint, method = null, payload = null) => {
  return fetch(`${NORMA_URL}/${endpoint}`, optionsGenerator(method, payload))
    .then(responseCheck)
    .then(successCheck)
} */

export const refreshTokenRequest = () => {
  let value = {
    'token': JSON.parse(localStorage.getItem('refreshToken'))
  }
  return requestNorma('auth/token', 'POST', value);
}

// jwt expired  jwt malformed
export const fetchWithRefresh = async (url, options) => {
  try {
    const res = await fetch(url, options);
    return await responseCheck(res);
  } catch (e) {
    if ((e.message === 'jwt expired') || (e.message === 'jwt malformed')) {
      console.log('c accessToken что-то не так..');
      const newTokens = await refreshTokenRequest();
      if (!newTokens.success) {
        Promise.reject(newTokens);
      }
      updateTokens(newTokens);
      options.headers.Authorization = newTokens.accessToken;
      console.log('повторный запрос..');
      const res = await fetch(url, options);
      return await responseCheck(res);
    } else {
      return Promise.reject(e)
    }
  }
}







