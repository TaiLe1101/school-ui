import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { Formik, Form, FastField } from 'formik';
import * as Yup from 'yup';
import styles from './Login.module.scss';
import Button from '~/components/Button';
import InputField from '~/components/InputField/InputField';

const cx = classNames.bind(styles);

function Login() {
  const initialValue = {
    userName: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    userName: Yup.string()
      .required('Vui lòng nhập trường này')
      .min(6, 'Tài khoản phải tối thiểu 6 ký tự')
      .strict(),

    password: Yup.string()
      .required('Vui lòng nhập trường này')
      .min(6, 'Tài khoản phải tối thiểu 6 ký tự')
      .strict(),
  });

  const handleLogin = ({ userName, password }) => {};

  return (
    <Formik
      initialValues={initialValue}
      validationSchema={validationSchema}
      onSubmit={handleLogin}
    >
      {(formikProps) => {
        return (
          <Form>
            <FastField
              name="userName"
              component={InputField}
              label="Tài khoản"
              placeholder="Nhập tên tài khoản của bạn"
            ></FastField>
            <FastField
              name="password"
              component={InputField}
              label="Mật khẩu"
              placeholder="Nhập mật khẩu của bạn"
              type="password"
            ></FastField>
            <Button type="submit" form className={cx('btn')}>
              Đăng nhập
            </Button>
            <div className={cx('wrapper-register')}>
              <span className={cx('register')}>Bạn chưa có tài khoản </span>
              <Link to="/register" className={cx('register-link')}>
                Đăng ký ngay !
              </Link>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

export default Login;
