
import styles from '../styles/Home.module.css'
import navigationStyles from '../styles/Navigation.module.css'
import Image from 'next/image'
import Link from "next/link";
import Head from "next/head";


export default function oceanSurfaceTemperature({ data }) {

  console.log(data)

  let metadata = data[2][0].metadata
  let datadata = data[2][0].data
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

    <h2>Data for {metadata.name}.</h2>
    <h3>Last updated {toDate(datadata.refresh.lastUpdated)} </h3>

    <p>
      {metadata.fullDescription}
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
