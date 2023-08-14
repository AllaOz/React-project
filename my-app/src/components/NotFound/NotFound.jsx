import React from 'react';
import { Link } from "react-router-dom";
import styles from './notfound.module.scss'; 
import  notfound from '../assets/images/404.png';

function NotFound () {
    return (

        <div className={styles.notfound}>
           <img src={notfound} className= {styles.imgnotfound} alt="man with magnifier" />
           <div className={styles.notfoundhcontainer}>
           <p className={styles.notfoundheading}>Page not found</p>
           <Link to="/" className={styles.notfoundlink}>Go Back Home</Link>
        </div>
        </div>
    )

    
}

export default NotFound;