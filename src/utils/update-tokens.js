import {setCookie} from './cookie';

export function updateTokens(answer) {
  console.log('Обновляем refreshToken и accessToken...');
  localStorage.setItem('refreshToken', JSON.stringify(answer.refreshToken));
  setCookie(answer.accessToken);
}