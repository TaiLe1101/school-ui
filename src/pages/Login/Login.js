import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Login.module.scss';
import FormGroup from '~/components/FormGroup';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Login() {
  return (
    <div className={cx('wrapper')}>
      <form className={cx('form-login')} action="">
        <FormGroup
          name={'userName'}
          placeholder="Tên Đăng Nhập"
          title={'Tài khoản'}
        ></FormGroup>
        <FormGroup
          type={'password'}
          name={'password'}
          placeholder="Mật khẩu"
          title={'Mật khẩu'}
        ></FormGroup>
        <Button form className={cx('btn')} to="/">
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
