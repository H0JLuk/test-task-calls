import React from 'react';

import Image from '../Image';
import { navbarItems } from './navbarLinks';

import styles from './Navbar.module.scss';
import logoIcon from '../../assets/icons/logo.svg';

function Navbar() {
  return (
    <nav className={styles.navbarContainer}>
      <a className={styles.logoWrapper} href='/'>
        <Image src={logoIcon} />
      </a>

      {navbarItems.map(({ Icon, text, link, isActive }) => (
        <a
          className={`${styles.navItem} ${isActive ? styles.activeItem : ''}`}
          href={link}
        >
          <Icon />
          <span className='pl-3'>{text}</span>
        </a>
      ))}
    </nav>
  );
}

export default Navbar;
