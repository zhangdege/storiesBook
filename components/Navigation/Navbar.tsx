import React from 'react'
import styled from 'styled-components'
import { Container } from '../../styles/styles'
import { LogoContainer } from './LogoContainer'
import Navigaton from './Navigation'
const NavbarC = styled( Container )`
	margin-top:0.5rem;
	column-gap:8rem;
	background: none;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	
`
const Navbar: React.FC = () => {
	return (
		<NavbarC>
			<LogoContainer />
			<Navigaton></Navigaton>
		</NavbarC>
	)
}

export default Navbar
