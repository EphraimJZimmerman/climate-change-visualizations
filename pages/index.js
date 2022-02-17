
// Understanding basic elements of HTML and CSS
// Navigating pages!


import styles from '../styles/Home.module.css'
import navigationStyles from '../styles/Navigation.module.css'
import Image from 'next/image'
import Link from "next/link";
import Head from "next/head";

//Function for converting time correctly
//Somehow create an import for header so it doesn't have to be made in each page
//Data navigation
//make logo CSS animation

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