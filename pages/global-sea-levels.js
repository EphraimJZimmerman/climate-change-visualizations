import styles from '../styles/Home.module.css'
import navigationStyles from '../styles/Navigation.module.css'
import Image from 'next/image'
import Link from "next/link";
import Head from "next/head";


export default function SeaLevels({ data }) {

  console.log(data)

  let data1 = data[2][0].metadata
  let data2 = data[2][0].data
  let a

  let toDate = function(date) {
    date = date.toString()
    date = date.substring(4,6) + "/" + date.substring(6) + "/" + date.substring(0,4)
    return date
  }

  return (<>

    <Head>
      <title>R-TCI | Template Page</title>
      <meta name="viewport" content="width=device-width"></meta>
    </Head>

    {/* Curly braces '{}' mean it is JavaScript inside of HTML. 
    For the following, exampleVar is a variable created above. */}


    {/*  Add as many paragraphs or titles as necessary.*/}

    <h2>Data for {title}.</h2>
    <h3>Last updated {lastUpdated}</h3>

    <p>
      Units: {unit}<br></br>
      <br></br>Current amount: {current} <br></br>
      <br></br>{length}
    </p>
    

  </>)
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://climate-change-visualizations-dkx3xwwvm-realeconomy.vercel.app/api/climate-data`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}
