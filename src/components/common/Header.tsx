import styled from '@emotion/styled'
import ScrollButton from './ScrollButton'
import { useRecoilValue } from 'recoil'
import {  contactState, projectState } from '../../recoil/atoms'
const Header = () => {
  const position = useRecoilValue(projectState);

  const contactMove = useRecoilValue(contactState);

  return (
    <Base>
      <ScrollButton size="large" move={0}>Ayaan</ScrollButton>
      <ScrollButton move={0}>Home</ScrollButton>
      <ScrollButton move={position}>Projects</ScrollButton>
      <ScrollButton move={contactMove}>Contact</ScrollButton>
    </Base>
  )
}

const Base = styled.div`
display: flex;
align-items: center;
gap: 3rem;
position: sticky;
z-index: 999;
background-color: #fff;
padding: 1rem;
top: 0;

 > div:first-of-type {
  margin-right: auto;
}
`

export default Header