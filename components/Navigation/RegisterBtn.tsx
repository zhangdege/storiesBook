import React from 'react'
import styled from 'styled-components'
interface RegisterBtnProps {
	label: string
}
const RegisterBtnC = styled.button`
	background: none;
	border: 2px solid rgba(102, 107, 115, 0.7);
	padding: 0.3rem 1rem;
	border-radius: 1rem;
	margin-right: 5px;
	color: #88dec3;
	font-family: 'Noto Sans SC';
	font-style: normal;
	&:hover {
		background: rgba(255, 255, 255, 0.2);
		box-shadow: rgb(31 47 71 / 25%) 0px 10px 20px, rgb(0 0 0 / 10%) 0px 1px 5px,
			rgb(255 255 255 / 40%) 0px 0px 0px 0.5px inset;
		transition: all 0.3s ease-in-out 0s;
	}
`
export const RegisterBtn: React.FC<RegisterBtnProps> = ( { ...args } ) => {
	return <RegisterBtnC>{args.label}</RegisterBtnC>
}
