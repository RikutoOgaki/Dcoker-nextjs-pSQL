import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Layout } from '@/components/Layout'
import style from '@/styles/home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Web design training</title>
      </Head>
      <Layout>
        <div className={style.homeWrap}>
          <ul className={style.nav}>
            <li><Link href={'/samples/01'} className={style.link}>AddMinusButton</Link></li>
            <li><Link href={'/samples/02'} className={style.link}>Calc</Link></li>
          </ul>
        </div>
      </Layout>
    </>
  )
}
