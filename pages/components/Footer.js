import React from 'react'
import navigationStyles from '../../styles/Navigation.module.css'

const Footer = () => {
  return (<>
    <footer className={navigationStyles.footer}>
      <ul className={navigationStyles.footerButtonAll}>
        <li className={navigationStyles.footerButton}>BUTTON1</li>
        <li className={navigationStyles.footerButton}>BUTTON2</li>
        <li className={navigationStyles.footerButton}>BUTTON3</li>
      </ul>
    </footer>
    </>)
}

export default Footer