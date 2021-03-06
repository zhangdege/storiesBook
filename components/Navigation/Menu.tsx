import { NextPage } from 'next'
import Link from "next/link"
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

interface ImgBorderProps {
  rotate: Boolean
}
const Container = styled.div<ImgBorderProps>`
  position: relative;
  font-size: 12px;
  margin: 0;
  padding: 0;
  width: 32px;
  height: 32px;
  background-color: #FFFFFF;
  border-radius: 8px;
  a{
    display: flex;
    text-decoration: none;
    color:black;
    width: 100%;
    height: 100%;
    align-items:center ;
    justify-content: center;
  }
  :hover img{
    transform: ${props => props.rotate ? 'rotate(90deg)' : ''};
  }
  :hover ul{
    height: ${props => props.rotate ? '217.5px' : '0px'};
  }
  :hover .imgContainers{
    background:  ${props => props.rotate ? 'rgba(63, 80, 220, 0.2)' : '#FFFFFF'};
  }
`
const Img = styled.img`
  position: absolute;
  top: 16px;
  left: 16px;
  width: 16px;
  height: 12px;
  margin-top: -6px;
  margin-left: -8px;
`
const ImgContainer = styled.div`
  position: absolute;
  display: flex;
  background-color: white;
  flex-direction: column;
  border-radius: 8px 8px 0px 8px;
  width: 32px;
  height: 32px;
`
const Ul = styled.ul`
  position: absolute;
  list-style: none;
  border-radius: 8px 8px 8px 8px;
  background-color: white;
  overflow: hidden;
  height: 0px; 
  transition: height 500ms;
  top: 33px;
  left: -68px;
  padding: 0;
  margin: 0;
`
const Li = styled.li`
  display: flex;
  padding: 0;
  margin: 0;
  height: 43.5px;
  width: 100px;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #cccccc30;
  :hover{
    background: rgba(63, 80, 220, 0.2);
    font-weight:bold;
  }
`

const MenuButton: NextPage<ImgBorderProps> = () => {
  const [click, setClick] = useState<boolean>( false )
  useEffect( () => {

    return () => {
      setClick( false )
    }
  }, [] )
  return (
    <Container rotate={click} onClick={() => { setClick( !click ) }} onMouseLeave={() => {
      setClick( !click )
    }}>
      <ImgContainer className="imgContainers"><Img src="group_three.svg" alt="tu"></Img></ImgContainer>
      <Ul className="listNames">
        <Li><Link href="/">??????</Link></Li>
        <Li><Link href="/">????????????</Link></Li>
        <Li><Link href="/">????????????</Link></Li>
        <Li><Link href="/">????????????</Link></Li>
        <Li><Link href="/">????????????</Link></Li>
      </Ul>
    </Container>
  )
}

export default MenuButton
