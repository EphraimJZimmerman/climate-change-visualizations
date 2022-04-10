
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




function graphData(i,{ data }) {
  let data1 = data[i][0]
  
  let title = data1.metadata.name
  let historical = data1.data.outputs.historical
  let dateRange = data1.data.outputs.dateRange
  
  var data_points = new Array()
  var range = new Array()
  let id = 0

  for (let i = 0; i < historical.length; i++) {
    if(historical[i]!=null){
      data_points[id] = historical[i]
      range[id] = dateRange[i].toString().substring(0,4)
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

export default function page({ data }) {
  
  return (<>
    
    <Head>
      <title>R-TCI | Template Page</title>
      <meta name="viewport" content="width=device-width"></meta>
      <script src="https://code.jscharting.com/2.9.0/jscharting.js"></script>
    </Head>

    <h2>Data for {"Graph Visualizations for climate change"}.</h2>

    <Line
      data={graphData(0, { data })}
      width={400}
      height={400}
    />
    <Line
      data={graphData(1, { data })}
      width={400}
      height={400}
    />
    <Line
      data={graphData(2, { data })}
      width={400}
      height={400}
    />
    <Line
      data={graphData(3, { data })}
      width={400}
      height={400}
    />
    <Line
      data={graphData(4, { data })}
      width={400}
      height={400}
    />
    <Line
      data={graphData(5, { data })}
      width={400}
      height={400}
    />
    <Line
      data={graphData(6, { data })}
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