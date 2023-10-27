import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Layout } from '@/components/Layout'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Layout>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Link href={'/samples/01'}>AddMinusButton</Link>
          <Link href={'/samples/02'}>Calc</Link>
        </div>
      </Layout>
    </>
  )
}
