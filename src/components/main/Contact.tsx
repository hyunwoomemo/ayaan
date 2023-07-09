import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import Button from '../common/Button'
import {AiFillGithub, AiOutlineInstagram } from 'react-icons/ai'
import { useRecoilState, useRecoilValue } from 'recoil'
import {  contactState } from '../../recoil/atoms'
import { useEffect, useRef } from 'react'

const Contact = () => {
  const baseRef = useRef<null | HTMLDivElement>(null)
  const [offsetTop, setOffsetTop] = useRecoilState(contactState);

  useEffect(() => {
    const target = baseRef.current;
    if (!target) return;

    if (target) {
      const offsetTop = target.offsetTop;
      // header의 높이 보정
      setOffsetTop(offsetTop - 70)
    }

  }, [])
  return (
    <Base ref={baseRef}>
      <Item>
        <img src="https://www.aboghanbari.com/static/defaultcard-hover-5eef4f0957217910c705b56db7539e0f.jpg" alt="" />
        <Description>
          
          <h1>Want to work together?</h1>
          <p>archihw94@gmail.com</p>
          <div>
            <Button bgc="black"><a href="mailto:hyunwoomemo@gmail.com">Contact me</a></Button>
            <Button bgc="" shape='round'>
              <a href="https://github.com/hyunwoomemo">
              <AiFillGithub />
              </a>
            </Button>
            <Button bgc="" shape='round'>
              <a href='https://www.instagram.com/hyunwoomemo/'>
              <AiOutlineInstagram />
              </a>
            </Button>
          </div>
        </Description>
      </Item>
    </Base>   
  )
}

const rotate = keyframes`
  0% {
    transform: rotate(40deg) translate(-50%, -50%) scale(4.2);
    transform-origin: center center;
  }
  100% {
    transform: rotate(-40deg) translate(-50%, -50%) scale(4.2);
    transform-origin: center center;
  }
`

const Base = styled.div`
  display: flex;
  gap: 2rem;

  height: 100%;
  width: 100%;

  @media (max-width:768px) {
    flex-direction: column;
  }
`

const Item = styled.div`
  border-radius: 25px;

    flex: 1 1 auto;
    position: relative;
    overflow: hidden;

    @media (max-width:768px) {
      order: 2;
    }

    > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 25px;
      position: absolute;
      z-index: -1;
      animation: ${rotate} 1.5s infinite alternate-reverse forwards;
    }

`

const Description = styled.div`
  padding: 2rem;
  flex-direction: column;
  display: flex;
  gap: 2rem;
  height: 100%;
  box-sizing: border-box;

  > h1 {
    font-size: 40px;
    line-height: 50px;
    font-weight: bold;
  }

  > div {
    margin-top: auto;
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  @media (max-width:768px) {
    line-height: 20px;
    > h1 {
      font-size: 20px;
      line-height: 28px;
    }
    > div {
      display: flex;
      flex-wrap: wrap;
      > button:first-of-type {
        width: 100%;
      }
      justify-content: center;
    }
  }
`

export default Contact