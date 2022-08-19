import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './AuthLayout.module.scss';

const cx = classNames.bind(styles);
function AuthLayout({ children }) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('content')}>
        <Link to="/">
          <img
            src="https://static.fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
            alt=""
            className={cx('logo')}
          />
        </Link>
        <h1 className={cx('title')}>Chào mừng đến với Shool T</h1>
        {children}
      </div>
    </div>
  );
}

export default AuthLayout;
