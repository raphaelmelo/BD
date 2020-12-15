import Head from 'next/head'
import styles from '../styles/Home.module.css'

import ActionButton from "../src/components/ActionButton"
import Header from "../src/components/Header"
import Home from "../src/components/HomeMain"
import SectionProducts from "../src/components/SectionProducts"
import SectionSnooker from "../src/components/SectionSnooker"
import SectionAttraction from "../src/components/SectionAttraction"
import Footer from "../src/components/Footer"


export default function Index() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home - Direitinho Bar e Espetaria</title>
        <meta name="description" content="No Direitinho.com Bar e Espetaria temos tudo que você precisa para se divertir;"/>
        <link rel="icon" href="/logomarca.svg" />
      </Head>
      <ActionButton />
      <Header />
      
      <Home />
      <SectionProducts />
      <SectionSnooker />
      <SectionAttraction />

      <Footer />
    </div>
  )
}
