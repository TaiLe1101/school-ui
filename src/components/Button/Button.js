import { Link } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
  to,
  href,
  children,
  className,
  primary = false,
  form = false,
  disable = false,
  onClick,
  ...passProps
}) {
  let Comp = 'button';
  const props = { onClick, ...passProps };
  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = 'a';
  } else if (disable) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && typeof props[key] == 'function') {
        delete props[key];
      }
    });
  }
  const classes = cx('wrapper', {
    [className]: className,
    primary,
    form,
  });

  return (
    <Comp className={classes} {...props}>
      <span className={cx('title')}>{children}</span>
    </Comp>
  );
}

export default Button;
