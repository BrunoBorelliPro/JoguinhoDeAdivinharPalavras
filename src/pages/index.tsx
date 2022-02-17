import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Descubra a palavra</h1>
        <Link href="/game">Start</Link>
      </main>
      
    </div>
  )
}

export default Home
