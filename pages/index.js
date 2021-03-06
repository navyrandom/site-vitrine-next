import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>CoralieGuyon</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Naturopathe certifiée <br />
          <a href="/about-me">Coralie GUYON</a>
        </h1>

        <div className={styles.grid}>
          <a href="/description" className={styles.card}>
            <h2>Pourquoi la naturopathie? </h2>
          </a>

          <a href="/about-me" className={styles.card}>
            <h2>Mon approche </h2>
          </a>

          <a href="/consultation" className={styles.card}>
            <h2>Consultation </h2>
          </a>

          <a
            href="https://www.coraliebeguin.com/tarifs-et-rendez-vous/"
            className={styles.card}
          >
            <h2>Tarifs & rendez-vous </h2>
          </a>
        </div>
        <div className={styles.description}>
          <h2>Qu'est ce que la naturopathie ? </h2>
          <p>
            En 1997, la naturopathie a été reconnue par le Parlement Européen
            comme médecine non conventionnelle puis en 2001, comme une pratique
            de médecine traditionnelle par l'OMS (Organisation Mondiale de la
            Santé).
            <br />
            C'est une médecine holistique, c'est-à-dire qu'elle prend en compte
            l'individu dans son ensemble au lieu d'isoler une seule partie de
            celui-ci.​ Son but est de chercher les causes du déséquilibre du
            corps et de rétablir les piliers de la santé afin que l'organisme
            puisse s'épanouir à nouveau correctement.
            <br /> En effet, si l'on ne supprime pas les causes d'un mal et que
            l'on tente à chaque fois de réprimer le symptôme, il finira toujours
            par revenir puisque l'on n'a rien changé a son nid douillet.
          </p>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>suivez moi sur fb</p>
          <span className={styles.logo}>
            <Image
              src="/picture-nature-png-10205.png"
              alt="Vercel Logo"
              width={72}
              height={16}
            />
          </span>
        </a>
      </footer>
      <style jsx global>{`
        html,
        title {
          padding: 0;
          margin: 0;
          font-family: WindSong;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
