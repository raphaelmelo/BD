import Head from 'next/head'
import styles from '../../styles/Home.module.css'

import ActionButton from "../../src/components/ActionButton"

import Header from "../../src/components/Header"
import HomePages from "../../src/components/HomePages" 
import Address from "../../src/components/Address"

import Footer from "../../src/components/Footer"


export default function Index() {
  return (
    <div className={styles.container}>
      <Head>
         <title>Contato - Direitinho Bar e Espetaria</title>
        <meta name="description" content="Abrimos de quarta a domingo, a partir das 19h!"/>
      </Head>
      <ActionButton />
      <Header />
      <HomePages title="Tudo o que existe de bom nessa vida, aprendi tomando cerveja!" description="Junte a galera e venha se divertir no Direitinho.com" />
      <Address />
      <Footer />
    </div>
  )
}
