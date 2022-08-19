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
          masage="Tài khoản phải từ 6 ký tử trở lên"
          onChange={handleInputUserName}
        ></FormGroup>
        <FormGroup
          type={'password'}
          name={'password'}
          placeholder="Mật khẩu"
          title={'Mật khẩu'}
          masage="Mật khẩu phải từ 6 ký tử trở lên"
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
