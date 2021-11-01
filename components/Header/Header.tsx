import React from 'react'
import styled from 'styled-components'
import { device } from '../../styles/device'
import { Container } from '../../styles/styles'
import Navbar from '../Navigation/Navbar'
import { Text } from '../Text'
const HeaderC = styled( Container )`
	@media ${device.mobile}{
		background-image: url('bg1.svg');
		background-repeat: no-repeat;
		background-size: 100%;
		justify-content: flex-start;
		row-gap: 0.2rem;
		height:302px;
	}
	@media ${device.laptop}{
		background-image: url('bg1.svg');
		background-repeat: no-repeat;
		background-size: 100%;
		justify-content: flex-start;
		row-gap: 0.2rem;
	}
	@media ${device.desktop}{
		background-image: url('bg1.svg');
		background-repeat: no-repeat;
		background-size: 100%;
		justify-content: flex-start;
		row-gap: 0.2rem;
	}
	@media ${device.tablet}{
		background-image: url('bg1.svg');
		background-repeat: no-repeat;
		background-size: 100%;
		justify-content: flex-start;
		row-gap: 0.2rem;
	}
`
const TextContent = styled( Container )`
	background: none;
	justify-content: flex-start;
	margin-left:1rem;
	
`
const Header: React.FC = () => {
	return (
		<HeaderC>
			<Navbar></Navbar>
			<TextContent>
				<Text size='3.5rem' color='' label='5G+' padding='0' weight='bold' family='poppins'></Text>
				<Text size='1.5rem' color='' label='数智化转型' padding='0' weight='bold' family='pingfang'></Text>
				<Text
					size='1.5rem'
					color=''
					label='快人一步'
					padding='0'
					weight='' family='pingfang'
				></Text>
			</TextContent>
			<TextContent>
				<Text size='1rem' color='' label='开始了解>' padding='0' weight='' family='pingfang'></Text>
			</TextContent>
		</HeaderC >
	)
}

export default Header
