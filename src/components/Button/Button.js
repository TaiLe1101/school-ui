import { Link } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({ to, content }) {
  return (
    <Link to={to} className={cx('btn')}>
      {content}
    </Link>
  );
}

export default Button;
