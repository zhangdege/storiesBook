import React from 'react'
import styled from 'styled-components'
import { device } from '../../styles/device'
import { Container } from '../../styles/styles'
import ImgBorder from '../Navigation'
import { LogoContainer } from '../Navigation/LogoContainer'

const HeaderC = styled( Container )`
	@media ${device.mobile}{
    padding:5px 16px;
    margin:0px;
		background: linear-gradient(118.47deg, #5754EA 1.18%, #3F50DC 99.48%);
		background-size: 100%;
    flex-direction: row;
    align-items: center;
		justify-content: space-between;
		row-gap: 0.2rem;
		height:42px;
    .Logo__LogoC-sc-j9mk4h-font-size-zero{
      font-size:14px;
      width:70px;
      height: 20px;
      line-height: 23px;
      margin:0 0 0 8px;
    }
	}
`

const DetailHeader: React.FC = () => {
  return (
    <HeaderC>
      <LogoContainer></LogoContainer>
      <ImgBorder rotate={true} />
    </HeaderC >
  )
}

export default DetailHeader
