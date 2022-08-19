import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './FormGroup.module.scss';
const cx = classNames.bind(styles);

function FormGroup({ children, errorMesage, title, name }) {
  return (
    <div className={cx('wrapper')}>
      <label htmlFor={name} className={cx('label')}>
        {title}
      </label>
      {children}
      <small className={cx('mesage')}>{errorMesage}</small>
    </div>
  );
}

FormGroup.propTypes = {
  children: PropTypes.node.isRequired,
  errorMesage: PropTypes.string,
};

export default FormGroup;
