import Head from 'next/head'
import styles from '../../styles/Home.module.css'

import ActionButton from "../../src/components/ActionButton"

import Header from "../../src/components/Header"
import HomePages from "../../src/components/HomePages"

import About from "../../src/components/About"
import Snooker from "../../src/components/SectionSnooker"

  import Footer from "../../src/components/Footer"


export default function Index() {
  return (
    <div className={styles.container}>
      <Head>
      <title>Sobre - Direitinho Bar e Espetaria</title>
      <meta name="description" content="Nos conheça um pouco mais"/>
      </Head>
      <Header />
      <HomePages title='"Nossa história é um litro aberto"' description="Venha e faça parte dessa história e se beber, não digite!" />
      <ActionButton />  
      <About />
      <Snooker />
      <Footer />
    </div>
  )
}
