import React from 'react'
import Layout from '../components/layout';
import Head from 'next/head'
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import FetchSomeThingBeautiful from '../facades/SomeHttpsFacades/FetchSomeThingBeautiful'
import { useEffect, useState } from 'react';
import FetchAnotherBeautiful from '../facades/SomeHttpsFacades/FetchAnotherBeautiful'

export default ({somethingBeautiful, ...props}) => {
  
  const [something, setSomething] = useState(somethingBeautiful)

  useEffect(() => {
    setTimeout(() => {
      setSomething('just kidding!!!')

      setTimeout(async () => {
        setSomething(await FetchAnotherBeautiful())
      }, 2000)
    }, 3000)
  }, [])

  return (<Layout>
    <Head>
      <title>Hello!</title>
    </Head>
    <h1>There's something beautiful. let's guess </h1>
    <p>{something}</p>
  </Layout>
  )
}
  
export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  return {
    props: {
      somethingBeautiful: await FetchSomeThingBeautiful()
    }
  }
}