import React from 'react'
import styles from './footer.styles.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="wrapperSocial">
        <div className="footerSocial">
          <a href='https://github.com/majomaken' target='_blank'>
            <i className='fa-brands fa-github'></i>
          </a>
        </div>
        <div className="footerSocial">
          <a href='https://www.linkedin.com/in/miguel-angel-jimenez-ochoa/' target='_blank'>
            <i className='fa-brands fa-linkedin'></i>
          </a>
        </div>
        <p>💻 by majomken</p>
        <p>&copy; 2024 All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer