
import styles from '../styles/Home.module.css'
import navigationStyles from '../styles/Navigation.module.css'
import Image from 'next/image'
import Link from "next/link";
import Head from "next/head";

import { Chart as ChartJS } from 'chart.js/auto'
import { Chart }            from 'react-chartjs-2'
import {Line} from 'react-chartjs-2';

/*
TASK:
DATA VISUALIZATIONS for Week of March 28th, 2022

- Install/import chartJS (https://www.chartjs.org/). You may have to install dependencies with npm, I
 used this a couple years ago so it might have changed since then
- Do not worry too much about colors or styling
- This will probably require some CSS work for formatting the size of the graph. If you have any trouble with that please contact me.
- Create exception handling for missing data and slow retrieval times (loading/error messages, etc.)
- You can view the live website from https://climate-change-visualizations.vercel.app/ on your computer or phone


npm install --save react-chartjs-2 chart.js

*/

const chartData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
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
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

export default function page({ data }) {



  let data1 = data[0][0]

  let title = data1.metadata.name

  
  let d = data1.data

  let toDate = function (date) {
    date = date.toString()
    date = date.substring(4, 6) + "/" + date.substring(6) + "/" + date.substring(0, 4)
    return date
  }

  let lastUpdated = toDate(d.refresh.lastUpdated)
  let current = d.outputs.current
  let unit = d.outputs.unit

  let historical = d.outputs.historical
  let dateRange = d.outputs.dateRange

  let heat = ""
  for (let i = 0; i < historical.length; i++) {
    heat += toDate(dateRange[i]) + ": " + historical[i] + " | "
  }
  console.log(heat)


 
  return (<>
    
    <Head>
      <title>R-TCI | Template Page</title>
      <meta name="viewport" content="width=device-width"></meta>
      <script src="https://code.jscharting.com/2.9.0/jscharting.js"></script>
    </Head>

    <h2>Data for {title}.</h2>
    <h3>Last updated {"lastUpdated"}</h3>
      
    <Line
      data={chartData}
      width={400}
      height={400}
    />
    
 
  </>)
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://climate-change-visualizations-dkx3xwwvm-realeconomy.vercel.app/api/climate-data`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}