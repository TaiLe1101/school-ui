import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import styles from './FormGroup.module.scss';
const cx = classNames.bind(styles);

function FormGroup({
  placeholder,
  name,
  title,
  mesage,
  type = 'text',
  valid = false,
  onChange,
}) {
  const [errMsg, setErrMsg] = useState('Vui lòng nhập trường này');
  const [isValid, setIsValid] = useState(valid);

  useEffect(() => {
    setIsValid(valid);
  }, [valid]);

  const handleValid = (e) => {
    const value = e.target.value;
    if (value.trim().length === 0) {
      setIsValid(true);
    } else if (value.trim().length < 6) {
      setErrMsg(mesage);
    } else {
      setIsValid(false);
    }
  };
  const classes = cx('wrapper', { valid: isValid });
  return (
    <div className={classes}>
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
      {isValid && <p className={cx('error-mesage')}>{isValid && errMsg}</p>}
    </div>
  );
}

export default FormGroup;
