import classNames from 'classnames/bind';
import styles from './Input.module.scss';

const cx = classNames.bind(styles);

function Input({ invalid, ...props }) {
  return (
    <input
      className={cx('input', {
        invalid,
      })}
      {...props}
    />
  );
}

export default Input;
