import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React from 'react'
import { RecoilState, RecoilValue } from 'recoil'

interface ScrollButtonProps {
  children: React.ReactNode,
  size?: string,
  move?: number,
} 

const ScrollButton = ({ children, size, move }: ScrollButtonProps) => {
  const handleClick = () => {
    window.scrollTo({top: move, behavior: 'smooth'})
  }
  return (
    <Base size={size}  onClick={handleClick}>{children}</Base>
  )
}

const Base = styled.div<ScrollButtonProps>`
  font-size: ${({ size }) => size === 'large' ? '28px' : '18px'};
  cursor: pointer;
`

export default ScrollButton