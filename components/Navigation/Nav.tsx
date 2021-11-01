import React from 'react'
import styled from 'styled-components'

interface NavProps {
	label: string
}

const NavC = styled.button`

	border: none;
	border-radius: 10px;
	background: none;
	color: #ffffff;
	font-family: 'pingfang';
	font-style: normal;
	font-size: 13px;
	&:hover {
		background: rgba(255, 255, 255, 0.2);
		box-shadow: rgb(31 47 71 / 25%) 0px 20px 40px, rgb(0 0 0 / 10%) 0px 1px 5px,
			rgb(255 255 255 / 40%) 0px 0px 0px 0.5px inset;
		transition: all 0.3s ease-in-out 0s;
	}
`
const Nav: React.FC<NavProps> = ( { ...args } ) => {
	return <NavC>{args.label}</NavC>
}

export default Nav
