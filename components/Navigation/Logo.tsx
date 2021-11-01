import React from 'react'
import styled from 'styled-components'
interface LogoProps {
	label: string
}

const LogoC = styled.div`
	font-family: pingfang;
	font-style: normal;
	font-size: 2rem;
	line-height: 80px;
	color: #ffffff;
`
const Logo: React.FC<LogoProps> = ( { ...args } ) => {
	return <LogoC className="Logo__LogoC-sc-j9mk4h-font-size-zero">{args.label}</LogoC>
}

export default Logo
