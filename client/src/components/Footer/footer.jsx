import React from 'react'
import styles from './footer.module.css'


export default function Footer() {
  return (
    <div className={styles.FooterContainer}>
        <div>Henry® 2021</div>
        <a className={styles.LinksFooter}
        href='https://www.linkedin.com/in/juan-sebastian-gatti/'>
            Linkedin
            </a>
        <a className={styles.LinksFooter} 
        href='https://github.com/juangatti'>
            Github
            </a>
        <div>Juan Gatti</div>

    </div>
  )
}
