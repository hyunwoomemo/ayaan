import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import Button from '../common/Button'
import {AiFillGithub, AiOutlineInstagram } from 'react-icons/ai'

const Introduce = () => {

  return (
    <Base>
      <Item>
        <img src="https://www.aboghanbari.com/static/defaultcard-hover-5eef4f0957217910c705b56db7539e0f.jpg" alt="" />
        <Description>
          
          <h1>안녕하세요, 프론트앤드 개발자 <br />이현우입니다.</h1>
          <p>아름다운 인터페이스와 문제를 정의하고 해결하는 것을 좋아합니다. </p>
          <p>현재 스마트팜 기업에서 프론트앤드 개발자로 근무하고 있습니다. </p>
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
      <Item>
        <img src="img/profile4.png" alt="" />
      </Item>
    </Base>   
  )
}

const rotate = keyframes`
  0% {
    transform: rotate(40deg) translate(-50%, -50%) scale(3.5);
    transform-origin: center center;
  }
  100% {
    transform: rotate(-40deg) translate(-50%, -50%) scale(3.5);
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
  height: 400px;
  border-radius: 25px;

  &:first-of-type {
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
  }

  &:last-of-type {
    width: 25%;
    background-color: #e1e1e1;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all .3s;
    filter: grayscale(1);
    &:hover {
      filter: grayscale(0.4);
    }
    
    >img {
      padding: 2rem;
      box-sizing: border-box;
      width: 100%;
      height: 100%;

      object-fit: cover;
      object-position: top;
    }
    @media (max-width:768px) {
      order: 1;
      flex: 1 1 auto;
      width: 100%;
      height: 350px;
    }
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

export default Introduce