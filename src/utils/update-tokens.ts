import { setCookie } from './cookie';

type TAnswerToken = {
  accessToken: string;
  refreshToken: string;
}
export function updateTokens(answer: TAnswerToken) {
  console.log('Обновляем refreshToken и accessToken...');
  localStorage.setItem('refreshToken', JSON.stringify(answer.refreshToken));
  setCookie(answer.accessToken, {});
}