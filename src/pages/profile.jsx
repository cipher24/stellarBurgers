import { EmailInput, PasswordInput, Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './profile.module.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutRequest } from '../services/actions/logout';
import { getProfileRequest, patchProfileRequest } from '../services/actions/profile';


export function ProfilePage() {

  const [profileInfo, setProfileInfo] = useState({
    name: '',
    email: '',
    password: '********'
  });
  
  const [isProfileChanged, setIsProfileChanged] = useState(false);
  const dispatch = useDispatch();
  const { user, isSuccessRequest } = useSelector(store => store.profileReducer);

  const onChange = (e) => {
    setProfileInfo({
      ...profileInfo,
      [e.target.name]: e.target.value
    })
  }

  const onClick = (e) => {
    e.preventDefault();
    dispatch(logoutRequest())
  }

  const onSaveChangesClick = (e) => {
    e.preventDefault();
    let payload = {};
    for (const [key, value] of Object.entries(profileInfo)) {
      if (key !== 'password') {
        if (value !== user[key]) {
          payload[key] = value
        }
      } else {
        if (value !== '********' ) {
          payload[key] = value
        }
      }
    }
    console.log('Sending new info to server',payload);
    // setPayload({});
    dispatch(patchProfileRequest(payload));
    setIsProfileChanged(false);
  }
  
  const onEditIconClick = (e) => {
    if (e.target.name === 'password') {
      setProfileInfo({
        ...profileInfo,
        [e.target.name]: ''
      })
    }
  }
 
  const fillWithServerData = () => {
    setProfileInfo({
      ...profileInfo,
      email: user.email,
      name: user.name
    });
    setIsProfileChanged(false);
  }

/*   const passwordReset = () => {
    setProfileInfo({
      ...profileInfo,
      password: '********'
    })
  } */

  const checkChange = () => {
    if ((profileInfo.name !== user.name) || 
    (profileInfo.email !== user.email) ||
    (profileInfo.password !== '********' )) {
      setIsProfileChanged(true)
    } else {
      setIsProfileChanged(false)
    }
  }

  useEffect(() => {
    if(!user) dispatch(getProfileRequest())
  }, [dispatch, getProfileRequest]);


  useEffect(() => {
    if (isSuccessRequest) fillWithServerData()
  }, [isSuccessRequest])

  return (
    <>
      <div className={styles.container}>
        <div className={`${styles.menu}  mr-15`}>
          <h1 className="text text_type_main-medium">Профиль</h1>
          <Link to="/profile/orders" className={styles.link}>

          <h1 className="text text_type_main-medium text_color_inactive">История заказов</h1>
          </Link>
          <div className={styles.exit} onClick={onClick}> 
          <h1 className="text text_type_main-medium text_color_inactive mb-20">Выход</h1>
          </div>
          <p className="text text_type_main-default text_color_inactive">В этом разделе вы можете изменять свои персональные данные</p>
        </div>
        <form className={styles.inputs} onSubmit={onSaveChangesClick}>
          <Input
            name={'name'}
            value={profileInfo.name}
            placeholder={'Имя'}
            size={'default'}
            error={false}
            icon={'EditIcon'}
            extraClass={` mb-6`}
            onChange={onChange}
            onBlur={checkChange}
          >
          </Input>
          <EmailInput
            name={'email'}
            placeholder={'Логин'}
            value={profileInfo.email}
            isIcon={true}
            icon={'EditIcon'}
            extraClass={`${isProfileChanged ? '' : 'input__textfield-disabled'} mb-6`}
            onChange={onChange}
            onBlur={checkChange}
          ></EmailInput>
          <PasswordInput
            name={'password'}
            value={profileInfo.password}
            icon={'EditIcon'}
            extraClass="mb-6"
            onChange={onChange}
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

      </div>
    </>
  )
}