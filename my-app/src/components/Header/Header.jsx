import React from 'react';
import { Link } from "react-router-dom";
import styles from './Header.module.scss'; 
import logo from '../assets/images/cards.png';


function Header() {
  return (
    <header className= {styles.cardHeader}>
      <nav>
        <ul>
        <Link to="/"><img src={logo} className= {styles.logo} alt="logo" /></Link>
        <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/game">Game</Link>
            </li>
            <li>
              <Link to="/words">Words</Link>
            </li>
        
          <select className={styles.languagesSelect}>
              <option value="">Language</option>
              <option value="English">English</option>
              <option value="Russian">Русский</option>
            </select>
        </ul>
      </nav>
    </header>
  );
}

export default Header;