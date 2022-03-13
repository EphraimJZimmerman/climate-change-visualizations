
import styles from '../styles/Home.module.css'
import navigationStyles from '../styles/Navigation.module.css'
import Image from 'next/image'
import Link from "next/link";
import Head from "next/head";


export default function oceanHeatContent({ data }) {



  /*

  ----------


  FIRST STEPS:
  1) Duplicate this file
  2) Rename the file. If your data was "Carbon Emissions", it would be carbon-emissions.js
  3) Rename the function templatePage to the name of your data, e.g., carbonEmissions
  4) Rename anything else on the page you see fit. 

  If you have any questions, please reference the Next.JS official documentation and the JS slides I created:
  https://nextjs.org/docs/basic-features/pages

  RUN PROGRAM:

  1) cd to directory in command line
  2) run: 'npm run dev' and open local port that it was created deployed from your browser.
  3) navigate to whatever the name of your file is. For example, http://localhost:3000/(carbon-emissions) (YOURS MAY NOT BE PORT 3000)

  ----------  

  TODO:
  1) Figure out how to link up your data so you are able to read it. Currently, it is an array of objects. 
     All data is now compiled in the directory pages/api/climate-data.js 
  1a) The data is being printed. (on Chrome) Right click the page -> inspect -> console (on top bar) -> down click: array (7)
  2) Figure out a way to grab your specific array and output all data. You should have a title for your data name <h2>...</h2>, and paragraphs <p></p> for all subsequent info.
  2a) Maybe add smaller labels for refresh periods? Or less important information such as API name will be on the bottom is small text? Reference HTML guidelines to look up how to do stuff like that.
  3) Output the "current" data, and an array of all historic data in a paragraph.

  NOTE: Not a single data point should be hard-coded in HTML. All data should be pulled from your API. For example, don't actually write the title, pull that String from the API.

  */
  console.log(data)

  let data1 = data[0][0]

  let title = data1.metadata.name

  let d = data1.data

  let toDate = function(date) {
    date = date.toString()
    date = date.substring(4,6) + "/" + date.substring(6) + "/" + date.substring(0,4)
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
    </Head>

    {/* Curly braces '{}' mean it is JavaScript inside of HTML. 
    For the following, exampleVar is a variable created above. */}


    {/*  Add as many paragraphs or titles as necessary.*/}

    <h2>Data for {title}.</h2>
    <h3>Last updated {lastUpdated}</h3>

    <p>
      Units: {unit}<br></br>
      <br></br>Current amount: {current} <br></br>
      <br></br>{heat}
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
