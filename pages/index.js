import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import HomeHeroMain from '../components/UI/templates/HomeHeroMain/HomeHeroMain'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Business Presentation Site</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <HomeHeroMain/>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}