import classNames from 'classnames/bind';

import Button from '~/components/Button';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
  return (
     <div className={cx('wrapper')}>
      <div className={cx('content')}>
        <Button to="/login">Login</Button>
      </div>
    </div>
  );
}

export default Header;
