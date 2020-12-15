import Head from 'next/head'
import styles from '../../styles/Home.module.css'

import ActionButton from "../../src/components/ActionButton"

import Header from "../../src/components/Header"
import HomePages from "../../src/components/HomePages" 
import Menu from "../../src/components/Menu" 
import Relax from "../../src/components/SectionRelax" 
import Footer from "../../src/components/Footer"


export default function Index() {
  return (
    <div className={styles.container}>
         <Head>
        <title>Cardápio - Direitinho Bar e Espetaria</title>
        <meta name="description" content="Nosso cardápio é recheado de felicidade para sua noite;"/>
      </Head>
      <ActionButton />
      <Header />
      <HomePages title="Espetinhos e aquela cerveja estupidamente gelada" description="SE BEBER NÃO DIRIJA E CHAME OS AMIGOS PARA BEBERMOS!" />
      <Menu />
      <Relax />
      <Footer />
    </div>
  )
}
