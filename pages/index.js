
import styles from '../styles/Home.module.css'
import navigationStyles from '../styles/Navigation.module.css'
import Image from 'next/image'
import Head from "next/head";
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Link from 'next/link'

import { BrowserRouter, Route, Routes } from "react-router-dom";
/*
TASK:
NAVIGATION for Week of March 28th, 2022

- Navigation bar on both mobile and desktop with tabs: 
  Index   Project Files   Data     The Club
- Footer should be all white with black buttons, take stylistic liberties where you see fit. This is more about formatting the layout, not design.
- Should work on both desktop and mobile. Use Navigation.module.css for styling and see guidelines for mobile formatting here: https://www.w3schools.com/css/css_rwd_mediaqueries.asp

*/

export default function Home() {

  return (<>

    <Head>
      <title>R-TCI | Introduction</title>
      <meta name="viewport" content="width=device-width"></meta>
    </Head>

    <NavBar />

    <body className={styles.body}>

      <br />
      <h1 className={styles.mainTitle}>Welcome to R-TCI</h1>


      <p className={styles.para}>
        ...
      </p>

      <p className={styles.paraColor}>
        ...

      </p>


      <a className={styles.next}>


        View Statistics and Index
        {/* 
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="20" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 13">
          <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
        </svg> */}

      </a>

      {/* 
      <Link href="/">
        <a className={styles.subLargeTitle}>What was our technical goal in developing this website?</a>
      </Link> */}

    </body>
    <Footer />


  </>)
}