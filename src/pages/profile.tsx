import { EmailInput, PasswordInput, Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './profile.module.css';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from '../utils/hooks';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { logoutRequest } from '../services/actions/logout';
import { getProfileRequest, patchProfileRequest } from '../services/actions/profile';
import { useForm } from '../hooks/use-form';
import { profile } from '../selectors/selectors';

type TActive = { isActive: boolean };

export function ProfilePage() {

  const { values, handleChange, setValues } = useForm({
    name: '',
    email: '',
    password: '********'
  })

  const [isProfileChanged, setIsProfileChanged] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const { user, isSuccessRequest } = useSelector(profile);

  const setActive = ({ isActive }: TActive) => isActive ? styles.linkActive : styles.linkInActive;

  const onExitClick = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch(logoutRequest());
  }
  //функция отправки измененных данных
  const onSaveChangesClick = (e: React.SyntheticEvent) => {
    e.preventDefault();
    let payload = {
      name: user!.name,
      email: user!.email,
      password: ''
    };


    for (const [key, value] of Object.entries(values)) {
      if (key !== 'password') {
        if (value !== user![key as keyof typeof user]) {
          payload[key as keyof typeof payload] = value
        }
      } else {
        if (value !== '********') {
          payload[key] = value
        }
      }
    }

    console.log('Sending new info to server', payload);
    dispatch(patchProfileRequest(payload));
    setIsProfileChanged(false);
  }

  const onEditIconClick = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.name === 'password') {
      setValues({
        ...values,
        [e.target.name]: ''
      })
    }
  }

  const fillWithServerData = () => {
    setValues({
      ...values,
      email: user!.email,
      name: user!.name
    });
    setIsProfileChanged(false);
  }

  const checkChange = () => {
    if ((values.name !== user!.name) ||
      (values.email !== user!.email) ||
      (values.password !== '********')) {
      setIsProfileChanged(true)
    } else {
      setIsProfileChanged(false)
    }
  }

  useEffect(() => {
    if (!user) dispatch(getProfileRequest())
  }, [dispatch, getProfileRequest]);


  useEffect(() => {
    if (isSuccessRequest) fillWithServerData()
  }, [isSuccessRequest])

  const form = <form className={`
  ${styles.inputs} mt-20`} onSubmit={onSaveChangesClick}>
    <Input
      name={'name'}
      value={values.name}
      placeholder={'Имя'}
      size={'default'}
      error={false}
      icon={'EditIcon'}
      extraClass={` mb-6`}
      onChange={handleChange}
      onBlur={checkChange}
    >
    </Input>
    <EmailInput
      name={'email'}
      placeholder={'Логин'}
      value={values.email}
      isIcon={true}
      extraClass={`${isProfileChanged ? '' : 'input__textfield-disabled'} mb-6`}
      onChange={handleChange}
      onBlur={checkChange}
    ></EmailInput>
    <PasswordInput
      name={'password'}
      value={values.password}
      icon={'EditIcon'}
      extraClass="mb-6"
      onChange={handleChange}
      onBlur={checkChange}
      onFocus={onEditIconClick}
    ></PasswordInput>
    {isProfileChanged && <div>
      <Button
        htmlType="button"
        type="primary"
        size="small"
        onClick={fillWithServerData}
      >
        Отмена
      </Button>
      <Button
        htmlType="submit"
        type="primary"
        size="small"
        extraClass="ml-10"
      >
        Сохранить
      </Button>
    </div>}
  </form>

  return (
    <div className={styles.container}>
      <div className={`${styles.menu}  mr-15`}>
        <NavLink end to="/profile" className={setActive}>
          <h1 className="text text_type_main-medium">
            Профиль
          </h1>
        </NavLink>
        <NavLink to="/profile/orders" className={setActive}>
          <h1 className="text text_type_main-medium ">История заказов</h1>
        </NavLink>
        <div className={styles.exit} onClick={onExitClick}>
          <h1 className="text text_type_main-medium text_color_inactive mb-20">Выход</h1>
        </div>
        <p className="text text_type_main-default text_color_inactive">В этом разделе вы можете изменять свои персональные данные</p>
      </div>
      <div className='mt-10'>

        {location.pathname === '/profile'
          ? form
          : <Outlet />}
      </div>
    </div>
  )
}