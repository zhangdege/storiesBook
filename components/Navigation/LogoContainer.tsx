import React from 'react'
import styled from 'styled-components'
import { Svg } from '../Svg'
import Logo from './Logo'

interface LogoContainerProps { }
const Con = styled.div`
  display:flex;
  background:none;
  flex-direction: row;
  column-gap: 0.5rem;
  justify-content: space-between;
  align-items:center;
`

export const LogoContainer: React.FC<LogoContainerProps> = () => {
  return (
    <Con>
      <Svg src='logo.svg' />
      <Logo label='埃泊思科技'></Logo>
    </Con>
  )
}