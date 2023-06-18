import React from 'react';
import styles from '../assets/styles/header.module.scss'; 
import logo from '../assets/images/cards.png';

function Header() {
  return (
    <header className= {styles.cardHeader}>
      <nav>
        <ul>
        <a href="/"><img src={logo} className= {styles.logo} alt="logo" /></a>
          <li><a href="/">Home</a></li>
          <li><a href="/cards">Cards</a></li>
          <select className={styles.languagesSelect}>
              <option value="">Language</option>
              <option value="English">English</option>
              <option value="Russian">Русский</option>
            </select>
          <li><a href="/contact">Contacts</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
