import classNames from 'classnames/bind';
import styles from './FormGroup.module.scss';
const cx = classNames.bind(styles);

function FormGroup({ placeholder, name, title, type = 'text', onChange }) {
  return (
    <div className={cx('wrapper')}>
      <label className={cx('title')} htmlFor={name}>
        {title}
      </label>
      <div className={cx('wrapper-input')}>
        <input
          className={cx('input')}
          type={type}
          placeholder={placeholder}
          name={name}
          onChange={onChange}
        />
      </div>
    </div>
  );
}

export default FormGroup;
