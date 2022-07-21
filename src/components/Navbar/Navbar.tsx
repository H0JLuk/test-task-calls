import React, { memo } from 'react';

import Image from '../Image';
import { navbarItems } from './navbarLinks';

import styles from './Navbar.module.scss';
import logoIcon from '../../assets/icons/logo.svg';
import plusIcon from '../../assets/icons/plus.svg';
import warningIcon from '../../assets/icons/warning.svg';
import Button from '../common/Button'

const Navbar = memo(function Navbar() {
  return (
    <nav className={styles.navbarContainer}>
      <a className={styles.logoWrapper} href='/'>
        <Image src={logoIcon} />
      </a>

      {navbarItems.map(({ Icon, text, link, isActive }) => (
        <a className={`${styles.navItem} ${isActive ? styles.activeItem : ''}`} href={link} key={text + link}>
          <Icon />
          <span className={styles.navItemText}>{text}</span>
        </a>
      ))}

      <div className='flex flex-col'>
        <Button className='mx-5 mt-14 mb-8 font-[500]' text='Добавить заказ' icon={plusIcon} />
        <Button className='mx-5 font-[500]' text='Оплата' icon={warningIcon} />
      </div>
    </nav>
  );
});

export default Navbar;
