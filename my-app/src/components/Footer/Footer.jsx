import React from 'react';
import { Link } from "react-router-dom";
import styles from './footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/images/cards.png';

function Footer() {
    const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.socialMedia}>
        <a href="https://www.facebook.com">
          <FontAwesomeIcon icon={faFacebook} className={styles.icon} />
        </a>
        <a href="https://www.twitter.com">
          <FontAwesomeIcon icon={faTwitter} className={styles.icon} />
        </a>
        <a href="https://www.instagram.com">
          <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
        </a>
        <a href="https://www.instagram.com">
          <FontAwesomeIcon icon={faYoutube} className={styles.icon} />
        </a>
      </div>
      <div><p>&copy; {currentYear} Cards</p></div>
      <Link to="/"><img src={logo} className= {styles.logo} alt="logo" /></Link>
    </footer>
  );
}

export default Footer;
