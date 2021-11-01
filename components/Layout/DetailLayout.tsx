import { NextPage } from 'next'
import React, { ReactNode, useRef } from 'react'
import styled from 'styled-components'

interface DetailLayoutProps {
  children: ReactNode
  title: string
  author?: string
  time?: string
}
const PagesLayout = styled.div` 
  margin: 24px 0 0 0;
  padding: 0px 16px 16px 16px;
  overflow: hidden;
  text-indent:2em;
  font-size: 12px;
  font-style:normal;
  text-align: center;
  word-wrap: normal;
  line-height: 18px;
  p{
    margin: 0;
    padding: 0;
    text-indent:2em;
    font-size: 12px;
    font-style:normal;
    text-align: justify;
    word-wrap: normal;
    line-height: 18px;
    color:#333333;
  }
  div{
    width: 100%;
    margin: auto;
  }
  img{
    width : 100%;
    padding: 14px 0px;
  }
  video{
    width : 100%;
    height: 193px;
  }
`
const PageTitle = styled.div`
  font-family: "Poppins","PingFang";
  font-style: normal;
  font-weight: normal;
  text-align:left;
  text-indent:0px;
  font-size: 26px;
  color: #333333;
  margin: 0px;
  padding: 0px 0px 8px 0px;
`
const AuthorAndTime = styled.div`
  font-family: "Poppins","PingFang";
  font-style: normal;
  font-size: 12px;
  line-height: 16.8px;
  color:#999999;
  padding:8px 0px 0px 0px;
`
const Article: NextPage<DetailLayoutProps> = ( { children, title, author, time } ) => {
  const mainNode = useRef<HTMLDivElement>( null )
  return (
    <PagesLayout ref={mainNode}>
      <PageTitle>{title}<AuthorAndTime>{time} 作者:{author}</AuthorAndTime></PageTitle>
      {children}
    </PagesLayout>
  )
}

export default Article