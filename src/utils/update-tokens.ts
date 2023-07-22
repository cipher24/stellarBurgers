import { setCookie } from './cookie';

//до импорт типа в экшены не выдавало ошибки, хотя не хватало полей при передаче ансера в функцию
export type TAnswerToken = {
  accessToken: string;
  refreshToken: string;
  success: boolean;
  user: TUserAnswer;
}
type TUserAnswer = {
  email: string;
  name: string;
}
// тут был тип, только без полей success & user
export function updateTokens(answer: TAnswerToken) {
  console.log('Обновляем refreshToken и accessToken...');
  localStorage.setItem('refreshToken', JSON.stringify(answer.refreshToken));
  setCookie(answer.accessToken, {});
}