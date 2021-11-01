import { NextPage } from 'next'
import React from 'react'
import styled from 'styled-components'
import Layout from "../components/Layout/Layout"

interface indexProps { }

const ZH = styled.div`
  border: 1px solid red;
`
const DH = styled( ZH )`
  border: 1px solid green;
`

const index: NextPage<indexProps> = () => {
  return (
    <Layout title="首页" type="index">
      <ZH>Hello world</ZH>
      <DH>Hello zhang</DH>
    </Layout>
  )
}

export default index