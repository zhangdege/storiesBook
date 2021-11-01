import React from 'react'
import styled from 'styled-components'

interface TextProps {
	label: string
	color?: string
	size?: string
	padding?: string
	weight?: string
	family?: string
}

const TextC = styled.div <TextProps>`
	color: ${( { color } ) => ( color ? color : '#FFFFFF' )};
	font-size: ${( { size } ) => ( size ? size : '20px' )};
	padding: ${( { padding } ) => ( padding ? padding : '0' )};
	font-family:${( { family } ) => ( family ? family : 'pingfang' )};
	font-weight:${( { weight } ) => ( weight ? weight : 'normal' )};
`

export const Text: React.FC<TextProps> = ( { ...args } ) => {
	return <TextC {...args}>{args.label}</TextC>
}
