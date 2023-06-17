import { EmailInput, PasswordInput, Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './profile.module.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutRequest } from '../services/actions/logout';
import { getProfileRequest, patchProfileRequest } from '../services/actions/profile';
// import { refreshTokenRequest } from '../services/actions/refresh-tokenD';

export function ProfilePage() {

  const [profileInfo, setProfileInfo] = useState({
    name: '',
    email: '',
    password: '********'
  });
  const [isProfileChanged, setIsProfileChanged] = useState(false);
  // const [payload, setPayload] = useState({});

  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isSuccessRequest } = useSelector(store => store.profileReducer);
  /*  const onLoginClick = () => {
     navigate('/login');
   } */
  const onChange = (e) => {
    setProfileInfo({
      ...profileInfo,
      [e.target.name]: e.target.value
    })
  }
  /* const onChangePassword = (e) => {
    setProfileInfo({
      ...profileInfo,
      [e.target.name]: e.target.value
    })
  } */

  
  const onClick = (e) => {
    e.preventDefault();
    dispatch(logoutRequest())
  }
 /*  const onClick2 = (e) => {
    e.preventDefault();
    dispatch(refreshTokenRequest())
  } */

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
  // window.addEventListener('click',)
  /* useEffect(()=> {
    let test = document.getElementsByTagName('svg');
    let test = document.getElementsByClassName('EditIcon');
    console.log(test);
  },[]) */
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
    dispatch(getProfileRequest())
  }, [dispatch, getProfileRequest]);


  useEffect(() => {
    if (isSuccessRequest) fillWithServerData()
  }, [isSuccessRequest])


  /*  useEffect(() => {
     if (isProfileChanged) console.log('izmenilsya')
   }, [isProfileChanged]) */

  return (
    <>
      <div className={styles.container}>
        <div className={`${styles.menu}  mr-15`}>
          <h1 className="text text_type_main-medium">Профиль</h1>
          <h1 className="text text_type_main-medium text_color_inactive">История заказов</h1>
          <h1 className="text text_type_main-medium text_color_inactive mb-20">Выход</h1>
          <button onClick={onClick}> EXIT </button>
          <p className="text text_type_main-default text_color_inactive">В этом разделе вы можете изменять свои персональные данные</p>
        </div>
        <form className={styles.inputs} onSubmit={onSaveChangesClick}>
          <Input
            name={'name'}
            // type={'text'}
            value={profileInfo.name}
            placeholder={'Имя'}
            // isIcon={true}
            size={'default'}
            error={false}
            icon={'EditIcon'}
            extraClass={` mb-6`}
            onChange={onChange}
            // onFocus={onEditIconClick}
            onBlur={checkChange}
          >
          </Input>
          <EmailInput
            name={'email'}
            placeholder={'Логин'}
            value={profileInfo.email}
            isIcon={true}
            icon={'EditIcon'}
            // aria-disabled={false}
            extraClass={`${isProfileChanged ? '' : 'input__textfield-disabled'} mb-6`}
            onChange={onChange}
            // onFocus={onEditIconClick}
            onBlur={checkChange}
          ></EmailInput>
          <PasswordInput
            name={'password'}
            value={profileInfo.password}
            icon={'EditIcon'}
            extraClass="mb-6"
            onChange={onChange}
            // onBlur={passwordReset}
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