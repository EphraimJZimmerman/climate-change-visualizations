
import styles from '../styles/Home.module.css'
import navigationStyles from '../styles/Navigation.module.css'
import Image from 'next/image'  
import Link from "next/link";
import Head from "next/head";
import Router from "next/router";

function carbonEmissions({ data }) {

  let dataSet = 0

  let convertDate = function (data) {
    let months = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun.", "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."]
    let year = data.substring(0, 4)
    let month = data.substring(5, 6)
    let day = data.substring(7, 8)
    return "(" + months[month - 1] + " " + day + ", " + year + ")"

  }

  const query = data[dataSet][0]
  const name = query.metadata.name
  const desc = query.metadata.fullDescription
  const author = (query.metadata.cited == undefined) ? "source" : query.metadata.cited
  const location = query.metadata.location
  const lastUpdated = String(query.data.refresh.lastUpdated)
  const current = query.data.outputs.current
  const units = query.data.outputs.unit

  let historical = String(query.data.outputs.historical).replace(/,/g, ', ')
  let range = query.data.outputs.dateRange.map(x => convertDate(String(x)))
  console.log(data)

  return (<>

    <Head>
      <title>R-TCI | {name}</title>
      <meta name="viewport" content="width=device-width"></meta>
    </Head>

    <br></br>
    <h2>{name}</h2>
    <p>
      {desc}
    </p>

    <ul>
      <li><b>Currently:</b> {current} {units.toLowerCase()}</li>
      <li><b>Data:</b> {historical}</li>
      <li><b>Date range:</b> {String(range).replace(/,/g, ', ')}</li>
    </ul>

    <br></br>

    <p>Data last updated {convertDate(lastUpdated)}, <u><a href={location} target="_blank" rel="noopener noreferrer">{author}</a></u></p>
  </>)
}

export async function getServerSideProps() {
  const res = await fetch(`https://climate-change-visualizations.vercel.app/api/climate-data`)
  const data = await res.json()
  return { props: { data } }
}


export default carbonEmissions