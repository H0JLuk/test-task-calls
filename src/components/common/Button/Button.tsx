import React, { ButtonHTMLAttributes } from 'react';

import styles from './Button.module.scss';

type TButtonVariant = 'primary';

type ButtonProps = {
  text: string;
  icon: string;
  variant?: TButtonVariant;
} & ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ text, icon, variant = 'primary', className = '', ...rest }: ButtonProps) {
  return (
    <button className={`${styles.buttonWrapper} ${styles[variant]} ${className}`} {...rest}>
      {icon && <div />}
      <span>{text}</span>
      {icon && <img src={icon} alt='' />}
    </button>
  );
}

export default Button;
