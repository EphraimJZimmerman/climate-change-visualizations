

import styles from '../styles/Home.module.css'
import navigationStyles from '../styles/Navigation.module.css'
import Image from 'next/image'
import Link from "next/link";
import Head from "next/head";

/*
TASK:
DATA VISUALIZATIONS for Week of March 28th, 2022

- Navigation bar on both mobile and desktop with tabs: 
  Index   Project Files   Data     The Club
- Footer should be all white with black buttons, take stylistic liberties where you see fit. This is more about formatting the layout, not design.
- Should work on both desktop and mobile. Use Navigation.module.css for styling and see guidelines for mobile formatting here: https://www.w3schools.com/css/css_rwd_mediaqueries.asp

*/

export default function Home() {

  return (<>

    <Head>
      <title>R-TCI | Home</title>
      <meta name="viewport" content="width=device-width"></meta>
    </Head>

    <header className={navigationStyles.allHeader}>
      <ul className={navigationStyles.navigationMain}>
        <li>
          <Link href="">
            {/* <Image src="/small_logo.jpg" height={120} width={120} /> */}
            <a className={navigationStyles.titleLarge}>R-TCI</a>
          </Link>
          <h1 className={navigationStyles.dash}>/</h1>
          <h1 className={navigationStyles.subTitle}> Home</h1>
        </li>
      </ul>
    </header>


    {/* <body>
    </body> */}

  </>)
}