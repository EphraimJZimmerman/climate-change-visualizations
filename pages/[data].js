
import styles from '../styles/Dash.module.css'
import navigationStyles from '../styles/Navigation.module.css'
import Image from 'next/image'
import Link from "next/link";
import Head from "next/head";
import { useRouter } from 'next/router';

import { Chart as ChartJS } from 'chart.js/auto'
import { Chart } from 'react-chartjs-2'
import { Line } from 'react-chartjs-2';

function graphData(i, { data }) {
  let data1 = data[i][0]

  let title = data1.metadata.name
  let historical = data1.data.outputs.historical
  let dateRange = data1.data.outputs.dateRange

  var data_points = new Array()
  var range = new Array()
  let id = 0

  for (let i = 0; i < historical.length; i++) {
    if (historical[i] != null) {
      data_points[id] = historical[i]
      range[id] = dateRange[i].toString().substring(0, 4)
      id++
    }
  }
  return {
    labels: range,
    datasets: [
      {
        label: title,
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: data_points
      }
    ]
  };
}

function context(i, { data }) {
  let data1 = data[i][0]
  let context = data1.metadata.fullDescription

  let last_updated = data1.data.refresh.lastUpdated.toString().substring(0, 4)
  let frequency = data1.data.refresh.frequency
  let current = data1.data.outputs.current
  let unit = data1.data.outputs.unit

  let limit = data1.metadata.capacity.limit
  let limit_unit = data1.metadata.capacity.units
  let percentage = data1.metadata.capacity.currentPercentage

  /*
  let linear1 =  data1.metadata.capacity.model.y1
  let linear2 =  data1.metadata.capacity.model.y2
  */

  return (<>

    <br></br>
    <div><b>Context</b></div><br></br>
    <div>{context}</div><br></br>
    <b>Data Description</b>
    <ul>
      <li>Date when last updated: {last_updated}</li>
      <li>Frequency for updates: {frequency}</li>
      <li>Current: {current} {unit}</li>
    </ul>

    <b>World Maximum capacity</b>
    <ul>
      <li>Limit: {limit} {limit_unit}</li>
      <li>Percentage until limit: {percentage}%</li>
    </ul>

    <div><small>Link for Source: <a href={data1.metadata.location} target="_blank">{data1.metadata.location}</a></small></div>
  </>)

}
function displayer(id, { data }) {
  return (<>


<body className={styles.body}>


  <Line

      data= {graphData(id, ( {data} )) }

      height={50}
      // width={850}

    />


    {context(id, { data })}
    <br></br>
    </body>
  </>)

}

const validity = (route) => {

  let id

  switch (route) {
    case "average-globals-sea-levels":
      return id = 1
    case "arctic-sea-ice-extent":
      return id = 2
    case "drought-archive":
      return id = 3
    case "average-global-water-surface":
      return id = 4
    case "average-global-sea-surface":
      return id = 5
    case "global-emissions-of-carbon-dioxide":
      return id = 6
    case "average global temperature":
      return id = 7
    case "ocean-heat-content":
      return id = 8
    default:
      return id = -1

  }
}



export default function page({ data }) {

  let id = 1
  const route = useRouter().asPath.slice(1);

  console.log(id)
  function next() {
    if (id == 6) {
      id = 0;
    }
    else {
      id++;
    }
    console.log(id)
  }

  function previous() {
    if (id == 0) {
      id = 6;
    }
    else {
      id--;
    }
    console.log(id)
  }

  let data1 = data[1][0]
  console.log(data[validity(route)][0][0])

  return (<>

    <Head>
      <title>R-TCI | {route} </title>
      <meta name="viewport" content="width=device-width"></meta>
      <script src="https://code.jscharting.com/2.9.0/jscharting.js"></script>
    </Head>
    
    <h2>{data1.metadata.name}</h2>
    {/* <button type="button" onClick={() => previous()} >Previous</button>
    <button type="button" onClick={() => next()} >Next</button> */}

    {displayer(1, { data })}
    {/* {displayer(2, { data })}
    {displayer(3, { data })}
    {displayer(4, { data })}
    {displayer(5, { data })}
    {displayer(6, { data })}
    {displayer(8, { data })} */}

  </>)
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://climate-change-visualizations.vercel.app/api/climate-data`)
  const data = await res.json()

  return { props: { data } }
}