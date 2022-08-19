import classNames from 'classnames/bind';
import { useState } from 'react';
import styles from './FormGroup.module.scss';
const cx = classNames.bind(styles);

function FormGroup({
  placeholder,
  name,
  title,
  masage,
  type = 'text',
  onChange,
}) {
  const [valid, setValid] = useState(false);
  const [errMsg, setErrMsg] = useState('Vui lòng nhập trường này');
  const handleValid = (e) => {
    const value = e.target.value;
    if (value.trim().length === 0) {
      setValid(true);
    } else if (value.trim().length < 6) {
      setErrMsg(masage);
    } else {
      setValid(false);
    }
  };

  return (
    <div className={cx('wrapper', { valid })}>
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
          onBlur={handleValid}
        />
      </div>
      {valid && <p className={cx('error-mesage')}>{errMsg}</p>}
    </div>
  );
}

export default FormGroup;
