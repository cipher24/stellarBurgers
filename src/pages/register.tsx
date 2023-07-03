import { EmailInput, PasswordInput, Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './register.module.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registerRequest } from '../services/actions/register';
import { useForm } from '../hooks/use-form';

export function RegisterPage() {

  const { values, handleChange, setValues } = useForm({
    email: '',
    password: '',
    name: ''
  })
  const dispatch: any = useDispatch();
  const { isSuccessRegistration } = useSelector((store: any) => store.registerReducer);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log('sending:', values);
    dispatch(registerRequest(values));
  }

  useEffect(() => {
    if (isSuccessRegistration) {
      setValues({
        email: '',
        password: '',
        name: ''
      })
    }

  }, [isSuccessRegistration])
  return (
    <>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <p className='text text_type_main-medium mb-6'> Регистрация </p>
          <Input
            value={values.name}
            onChange={handleChange}
            name={'name'}
            type={'text'}
            placeholder={'Имя'}
            extraClass="mb-6"
          ></Input>
          <EmailInput
            value={values.email}
            name={'email'}
            onChange={handleChange}
            extraClass="mb-6"
          ></EmailInput>
          <PasswordInput
            value={values.password}
            name={'password'}
            onChange={handleChange}
          ></PasswordInput>
          <Button
            htmlType="submit"
            type="primary"
            size="medium"
            extraClass="mt-6"
          >
            Зарегистрироваться
          </Button>
        </form>
        {isSuccessRegistration && <p className='text text_type_main-default'> Успешная регистрация!</p>}
        <div className="text text_type_main-default text_color_inactive mt-20 mb-4">
          Уже зарегистрированы?
          <Link
            to="/login"
            className={` ${styles.links} ml-2`}
          >
            Войти
          </Link>
        </div>
      </div>
    </>
  )
}