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
  const [isValid, setIsValid] = useState(false);

  const handleInputUserName = (e) => {
    setUserName(e.target.value);
    if (userName.trim().length > 0) {
      setIsValid(false);
    } else {
    }
  };

  const handleInputPassword = (e) => {
    setPassword(e.target.value);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    if (userName.trim().length === 0 || password.trim().length === 0) {
    }
  };
  return (
    <div className={cx('wrapper')}>
      <form className={cx('form-login')} action="" onSubmit={handleLogin}>
        <FormGroup
          name={'userName'}
          placeholder="Tên Đăng Nhập"
          title={'Tài khoản'}
          onChange={handleInputUserName}
          mesage="Tài khoản phải có ít nhất 6 ký tự"
          valid={isValid && true}
        ></FormGroup>
        <FormGroup
          type={'password'}
          name={'password'}
          placeholder="Mật khẩu"
          title={'Mật khẩu'}
          onChange={handleInputPassword}
          mesage="Mật khẩu phải có ít nhất 6 ký tự"
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
