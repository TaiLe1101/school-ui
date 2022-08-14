import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import styles from './Login.module.scss';
import FormGroup from '~/components/FormGroup';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Login() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleInputUserName = (e) => {
    setUserName(e.target.value);
  };

  const handleInputPassword = (e) => {
    setPassword(e.target.value);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    const newUser = {
      userName,
      password,
    };
  };
  return (
    <div className={cx('wrapper')}>
      <form className={cx('form-login')} action="" onSubmit={handleLogin}>
        <FormGroup
          name={'userName'}
          placeholder="Tên Đăng Nhập"
          title={'Tài khoản'}
          onChange={handleInputUserName}
        ></FormGroup>
        <FormGroup
          type={'password'}
          name={'password'}
          placeholder="Mật khẩu"
          title={'Mật khẩu'}
          onChange={handleInputPassword}
        ></FormGroup>
        <Button form className={cx('btn')}>
          Đăng nhập
        </Button>
        <div className={cx('wrapper-register')}>
          <span className={cx('register')}>Bạn chưa có tài khoản </span>
          <Link to="/register" className={cx('register-link')}>
            Đăng ký ngay !
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
