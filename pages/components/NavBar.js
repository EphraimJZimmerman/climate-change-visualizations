import React, { useState } from 'react';
import * as AiIcons from 'react-icons/ai';
import Link from "next/link";
import navigationStyles from '../../styles/Navigation.module.css'


function NavBar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(true);
  const hideSidebar = () => setSidebar(false)
  return (
    <>
    <header className={navigationStyles.allHeader}>
      <div className={navigationStyles.logo}>
          <Link href="">
            {/* <Image src="/small_logo.jpg" height={120} width={120} /> */}
            <a className={navigationStyles.titleLarge}>R-TCI</a>
          </Link>
          <h1 className={navigationStyles.dash}>/</h1>
          <h1 onClick={showSidebar} className={navigationStyles.subTitle}> Home</h1>
      </div>
      <div className={sidebar ? navigationStyles.navContainerActive : navigationStyles.navContainer}>
        <ul className={navigationStyles.navigationMain}>
          <li className={navigationStyles.navMenu}><Link href="" >Home</Link></li>
          <li className={navigationStyles.navMenu}><Link href="" >Project Files</Link></li>
          <li className={navigationStyles.navMenu}><Link href="" >Data</Link></li>
          <li className={navigationStyles.navMenu}><Link href="" >The Club</Link></li>
        </ul>
        <div className = {navigationStyles.cross} onClick={hideSidebar}>
          <AiIcons.AiOutlineClose/>
        </div>
      </div>
    </header>
   </>
  )
}

export default NavBar