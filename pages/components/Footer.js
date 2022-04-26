/**

                  *
                * *
              * * *
            * * * * 
          * * * * * 
        * * * * * *
      * * * * * * *

  BRANDEIS QUANT CLUB
  Author: Ming Wang
  Spring 2022

 */



import React from 'react'
import navigationStyles from '../../styles/Navigation.module.css'

const Footer = () => {
  return (<>
    <footer className={navigationStyles.footer}>
      <ul className={navigationStyles.footerButtonAll}>
        <li className={navigationStyles.footerButton}>Privacy Policy</li>
        {/* <li className={navigationStyles.footerButton}>Citations </li> */}
        {/* <li className={navigationStyles.footerButton}>BUTTON3</li> */}
      </ul>
    </footer>
    </>)
}

export default Footer