import React from 'react'
import styled from 'styled-components'

interface SvgProps {
  src: string
}

const SvgC = styled.img.attrs( props => ( {
  alt: '...',
  src: props.src
} ) )`

`

export const Svg: React.FC<SvgProps> = ( { ...args } ) => {
  return (
    <SvgC {...args}></SvgC>
  )
}