import { getCookie } from './cookie';
import { updateTokens } from './update-tokens';

// update ? 21

type TFetchMethods = "POST" | "GET" | "PATCH";
type TFetchBody = {
  [name: string]: string | string[]
}
type TFetchOptions = {
  method: TFetchMethods;
  headers: {
    "Content-type": string;
    Authorization: string;
  }
  body?: string | null;
}

const NORMA_URL = 'https://norma.nomoreparties.space/api';

const responseCheck = <T>(response: Response): Promise<T> => {
  return response.ok ? response.json() : response.json().then(e => Promise.reject(e))
}
// обойтись без any?
const successCheck = <T>(data: any): Promise<T> => {
  return (data && data.success) ? data : Promise.reject()
}

const optionsGenerator = (method: TFetchMethods | null, payload: TFetchBody | null): TFetchOptions => {
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


export const requestNorma = (
  endpoint: string,
  method: TFetchMethods | null = null,
  payload: TFetchBody | null = null
): Promise<any> => {
  return fetchWithRefresh(`${NORMA_URL}/${endpoint}`, optionsGenerator(method, payload))
    // .then(responseCheck)
    .then(successCheck)
}

export const refreshTokenRequest = () => {
  let token = localStorage.getItem('refreshToken');
  let value;
  if (token) {
    value = {
      'token': JSON.parse(token)
    }
  } else value = {
    'token': null
  }
  return requestNorma('auth/token', 'POST', value);
}

// jwt expired  jwt malformed
export const fetchWithRefresh = async (url: RequestInfo | URL, options?: TFetchOptions) => {
  try {
    const res = await fetch(url, options);
    return await responseCheck(res);
  } catch (e) {
    if (((e as Error)?.message === 'jwt expired') || ((e as Error)?.message === 'jwt malformed')) {
      console.log('c accessToken что-то не так..');
      const newTokens: any = await refreshTokenRequest();
      if (!newTokens.success) {
        Promise.reject(newTokens);
      }
      updateTokens(newTokens);
      options!.headers!.Authorization = newTokens.accessToken;
      console.log('повторный запрос..');
      const res = await fetch(url, options);
      return await responseCheck(res);
    } else {
      return Promise.reject(e)
    }
  }
}







