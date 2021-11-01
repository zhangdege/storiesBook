import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import React from 'react';

interface bmapProps {

}
const BaiMap = dynamic( () => import( '../components/BaiduMap' ), { ssr: false } )
const bmap: NextPage<bmapProps> = () => {
  return (
    <div>
      <Head>
        <script type="text/javascript" src="//api.map.baidu.com/api?type=webgl&v=1.0&ak=FXth0QdkBk3RU3KMzh0VDK3qTD0sNlUc"></script>
      </Head>
      <BaiMap />
    </div>
  )
}

export default bmap