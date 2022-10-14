import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>rankmybesties.com</title>
        <meta
          name="description"
          content="Visit rankmybesties.com to rank your All In besties and share with your friends"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>rankmybesties.com</h1>
      </main>

      <footer className={styles.footer}>
        Dev'd with love by{" "}
        <a href="https://twitter.com/jwhubert91" target="_blank">
          <span>@jwhubert91</span>
        </a>
      </footer>
    </div>
  )
}
