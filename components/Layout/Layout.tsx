import Head from 'next/head'
import React, { ReactNode } from 'react'
import Footer from '../Footer/Footer'
import DetailHeader from '../Header/DetailHeader'
import Header from '../Header/Header'

type layoutProps = {
  children: ReactNode
  title?: string
  type?: 'detail' | 'index' | 'other'
}

const Layout = ( { children, title = 'default title', type }: layoutProps ) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <header>
        {type === 'detail' ? <DetailHeader /> : type === 'index' ? <Header /> : <Header />}
      </header>
      {children}
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
export default Layout
