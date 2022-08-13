import classNames from 'classnames/bind';
import styles from './AuthLayout.module.scss';

const cx = classNames.bind(styles);
function AuthLayout({ children }) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('content')}>
        <h1 className={cx('title')}>Welcome</h1>

        {children}
      </div>
    </div>
  );
}

export default AuthLayout;
