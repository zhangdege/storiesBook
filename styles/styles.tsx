import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	background: #6f7fd0;
`

export const GlassType = styled.div`
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	backdrop-filter: blur(500px);
	opacity: 0.8;
	border-radius: 9px;
`

export const BlobType = styled.div`
	position: relative;
	background: linear-gradient(
		238.81deg,
		rgba(59, 185, 194, 0.8) 1.24%,
		rgba(67, 155, 160, 0.16) 89.77%
	);
	filter: blur(500px);
	height: 30px;
	width: 30px;
`

export const Btn = styled.button`
	border: none;
	background: linear-gradient(
		92.28deg,
		rgba(255, 255, 255, 0.8) -4.85%,
		rgba(255, 255, 255, 0.2) 95.15%
	);
	box-shadow: 2px 2px 4px #475288, -2px -2px 1px #ffffff;
	border-radius: 9px;
	padding: 0.5rem 2rem;
`
export const TextType = styled.div`
	font-family: 'Noto Sans SC';
	font-style: normal;
	color: #ffffff;
`
