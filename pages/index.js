
// Understanding basic elements of HTML and CSS
// Navigating pages

import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Home() {

  return (

    <body>
      <Image src="/large_logo.svg" height={100} width={275} />
    </body>

  )
}