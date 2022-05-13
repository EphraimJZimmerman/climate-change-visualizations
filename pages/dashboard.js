
import styles from '../styles/Dash.module.css'
import styles_dash from '../styles/Temp.module.css'

import navigationStyles from '../styles/Navigation.module.css'
import Image from 'next/image'
import Head from "next/head";
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Link from 'next/link'

import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function Home() {

  return (<>

    <Head>
      <title>R-TCI | Dashboard</title>
      <meta name="viewport" content="width=device-width"></meta>
    </Head>

    <NavBar />

    <body className={styles.body}>

      <br />
      {/* <h1 className={styles.mainTitle}>Welcome to R-TCI</h1> */}
      <h3 className={styles.subLargeTitle}>R-TCI Dashboard
      </h3>

      <p className={styles.paraColor}>
      A standard index scaled 1-100 of the most significant factors underlying climate change. This will make it easier to conceptualize and understand the nature and urgency of the current climate crises.
      <h3 className={styles.showHide}>Show Full Introduction</h3>
      

      </p>

 

      {/* <p className={styles.para}>
      The ramifications of climate change can be daunting for many to grasp. 
      Our climate change index will measure and aggregate the severity of climate change in real time using data 
      compiled from various reputable sources, such as government agencies and academic institutions. 
      Our visualizations of the many elements that impact our planets climate  will illustrate the capacity for further distress prior to an inflection point, or a point of no return. 
      </p>

      <p className={styles.paraColor}>
      R-TCI is a standard index scaled 1-100 of the most significant factors underlying climate change. This will make it easier to conceptualize and understand the nature and urgency of the current climate crises.
      </p> */}



{/* 
        <p className={styles_dash.description}>
          Get started by editing{' '}
          <code className={styles_dash.code}>pages/index.js</code>
        </p> */}
        <br/>
        

        <div className={styles_dash.grid}>
          <a href="https://nextjs.org/docs" className={styles_dash.card}>
          <h1 className={styles.number}>
          31
          </h1> 
          <h1 className={styles.numberContext}>

          &nbsp;/100
          </h1> 

       
            <p>

            Our research finds that the earth is using roughly 31% of its capacity before a complete climate crises.  

            </p>
          </a>

          <a href="https://nextjs.org/learn" className={styles_dash.card}>
          <h1 className={styles.year}>
          85
          </h1> 
          <h1 className={styles.yearContext}>
            &nbsp; years
          </h1> 

       
            <p>
            After calculating the growth of each dataset from 1995 to 2019, we estimate roughly 85 years until the global capacity is hit.  

            </p>
    
          </a>

          {/* <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles_dash.card}
          >
            <p className={styles.resources}>Causes</p>
            <p>Click here to view urgent matters as cited by NASA.</p>
          </a> */}
{/* 
          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles_dash.card}
          >
            <p className={styles.resources}>Resources</p>
            <p>
              Click here to view a list of different organizations that compat climate change
            </p>
          </a> */}
        </div>

  
        {/* <p className={styles.paraColorFinal}> */}
      {/* A standard index scaled 1-100 of the most significant factors underlying climate change. This will make it easier to conceptualize and understand the nature and urgency of the current climate crises. */}
      {/* <h3 className={styles.showHide}>Show Full Introduction</h3> */}
      
      {/* </p> */}



      {/* <a className={styles_dash.viewButton}> */}


        {/* View Disclosures */}
{/* 
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="20" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 13">
          <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
        </svg> */}

      {/* </a> */}

      {/* 
      <Link href="/">
        <a className={styles.subLargeTitle}>What was our technical goal in developing this website?</a>
      </Link> */}

    </body>
    {/* <Footer /> */}


  </>)
}