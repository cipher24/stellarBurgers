import reducer from './register';
import {
  REGISTER_ERROR,
  REGISTER_SUCCESS,
  REGISTER_REQUEST,
  REGISTER_INIT,
  TRegisterActions
} from '../actions/register';
describe('test register reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {} as TRegisterActions)).toEqual({
      isSuccessRegistration: false,
      isError: null
    })
  });
  it('should handle REGISTER_REQUEST', () => {
    expect(reducer({
      isSuccessRegistration: true,
      isError: null
    }, {
      type: REGISTER_REQUEST
    })).toEqual({
      isSuccessRegistration: false,
      isError: null
    })
  });
  it('should handle REGISTER_INIT', () => {
    expect(reducer({
      isSuccessRegistration: true,
      isError: null
    }, {
      type: REGISTER_INIT
    })).toEqual({
      isSuccessRegistration: false,
      isError: null
    })
  });
  it('should handle REGISTER_SUCCESS', () => {
    expect(reducer({
      isSuccessRegistration: false,
      isError: null
    }, {
      type: REGISTER_SUCCESS,
    })).toEqual({
      isSuccessRegistration: true,
      isError: null
    })
  })
  it('should handle REGISTER_ERROR', () => {
    expect(reducer({
      isSuccessRegistration: true,
      isError: null
    }, {
      type: REGISTER_ERROR,
      payload: 'Такой пользователь существует'
    })).toEqual({
      isError: 'Такой пользователь существует',
      isSuccessRegistration: false
    })
  });


})