
import styles from '../styles/Home.module.css'
import navigationStyles from '../styles/Navigation.module.css'
import Image from 'next/image'
import Link from "next/link";
import Head from "next/head";


export default function drought({ data }) {



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
  3) navigate to whatever the name of your file is. For example, http://localhost:3000/carbon-emissions (YOURS MAY NOT BE PORT 3000)

  ----------

  TODO:
  1) Figure out how to link up your data so you are able to read it. Currently, it is an array of objects.
     All data is now compiled in the directory pages/api/climate-data.js
  1a) The data is being printed. (on Chrome) Right click the page -> inspect -> console (on top bar) -> down click: array (7)
  2) Figure out a way to grab your specific array and output all data. You should have a title for your data name <h2>...</h2>, and paragraphs <p></p> for all subsequent info.
  2a) Maybe add smaller labels for refresh periods? Or less important information such as API name will be on the bottom is small text? Reference HTML guidelines to look up how to do stuff like that.
  3) Output the "current" data, and an array of all historic data in a paragraph, as well as any other information you think is relevant for your page such as a description or refresh period.

  NOTE: Not a single data point should be hard-coded in HTML. All data should be pulled from your API. For example, don't actually write the title, pull that String from the API.

  */
console.log(data)
  let data1 = data[1][0]
  let data2 = data[1][0].data
data2.outputs

  let value = data1.metadata.name
  let lastupdate = data2.refresh.lastUpdated
  let frequent = data2.refresh.frequency
  
  let data4 = function (data) {
     
  }
  let current = data2.outputs.current
  let unit = data2.outputs.unit
  let history = data2.outputs.historical
  let datarange = data2.outputs.dateRange

 

  
  


  



  return (<>

    <Head>
      <title>R-TCI | Template Page</title>
      <meta name="viewport" content="width=device-width"></meta>
    </Head>
    

    {/* Curly braces '{}' mean it is JavaScript inside of HTML.
    For the following, exampleVar is a variable created above. */}


    {/*  Add as many paragraphs or titles as necessary.*/}

    <h2>Data for {value} </h2>
    <h3>Last updated {lastupdate} </h3>
    <h3>Data for Frequency: {frequent} </h3>
    <h3>Current data: {current} </h3>
    <h3>Unit: {unit} </h3>
    <h3>Historical data: {history} </h3>
    <h3>Data range: {datarange} </h3>
   

  
  

    <p>
      Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim
      labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi
      animcupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est
      aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia
      pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit
      commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa
      proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia
      eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim.
      Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et
      culpa duis.
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
