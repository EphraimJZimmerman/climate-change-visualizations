
import styles from '../styles/Home.module.css'
import navigationStyles from '../styles/Navigation.module.css'
import Image from 'next/image'
import Head from "next/head";
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import {BrowserRouter, Route, Routes} from "react-router-dom";
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
      <title>R-TCI | Home</title>
      <meta name="viewport" content="width=device-width"></meta>
    </Head>
    <NavBar />
    {/* <BrowserRouter>
   
      <Routes>
        <Route index element={<div>home</div>}/>
      </Routes>
    </BrowserRouter> */}

       {/* <body>
    </body> */}

    <Footer />

 
  </>)
}