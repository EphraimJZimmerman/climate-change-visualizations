
import styles from '../styles/Home.module.css'
import navigationStyles from '../styles/Navigation.module.css'
import Image from 'next/image'
import Link from "next/link";
import Head from "next/head";


// import useSWR from 'swr';

export default function templatePage() {



  /*


  ----------

  If you have any questions, please reference the Next.JS official documentation and the JS slides:
  https://nextjs.org/docs/basic-features/pages

  RUN PROGRAM:

  1) Open terminal. When you open your terminal, run: npm install swr
  2) cd to directory in command line
  3) run: 'npm run dev' and open local port that it was created deployed from your browser.
  4) navigate to whatever the name of your file is. For example, http://localhost:3000/global-ocean-heat-content

  ----------  

  TODO:
  1) Figure out how to link up your data so you are able to read it as an object. Currently, it is an array of objects. 
     All data is now compiled in the directory pages/api/climate-data/js
     This can be found live (when the website is being hosted) like so: http://localhost:3000/api/climate-data

  2) 



  */


  // const { data, error } = useSWR('/api/climate/data', fetcher)
  // if (error) return <div>Failed to load data</div>
  // if (!data) return <div>Loading...</div>

  // console.log(data)
  let exampleVar = "Hey there!"
  let exampleFunction = function() {
    return "Hey"
  }

  return (<>

    <Head>
      <title>R-TCI | Global Ocean Heat Content</title>
      <meta name="viewport" content="width=device-width"></meta>
    </Head>

    {/* Curly braces '{}' mean it is JavaScript inside of HTML. 
    For the following, exampleVar is a variable created above. */}

    <h1>{exampleVar} is my variable.</h1>
    {/* <h1>'{data}' is my variable.</h1> */}

  </>)
}