import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export async function getServerSideProps(context) {
    console.log(context)
    return {
      props: {}, // will be passed to the page component as props
    }
  }

export default function CtxAccess() {
  return (
    <div className={styles.container}>
  gdgdgdg 
    </div>
  )
}
