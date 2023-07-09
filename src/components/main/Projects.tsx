import styled from '@emotion/styled'
import { useRecoilState } from 'recoil';
import { projectState } from '../../recoil/atoms';
import { useEffect, useRef } from 'react';

const Projects = () => {
  const baseRef = useRef<null | HTMLDivElement>(null)
  const [offsetTop, setOffsetTop] = useRecoilState(projectState);
  
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
      <BoxItem>
        <Description>
          <h1>wooah</h1>
          <p>육아 기록을 위한 웹애플리케이션</p>
          </Description>
          <img src="img/wooah.png" alt="" />
      </BoxItem>
      <BoxItem>
      <Description>
          <h1>개발블로그</h1>
          <p>다양한 주제의 새로운 지식을 기록</p>
          </Description>
          <img src="img/blog.png" alt="" />
      </BoxItem>
      <BoxItem>
        <Description>
          <h1>간편한 메모</h1>
          <p>데스크탑과 모바일 환경에서 사용할 수 있는 메모장</p>
        </Description>
        <img src="img/memo.jpg" alt="" />
      </BoxItem>
      <BoxItem>
        <Description>
          <h1>Jian-shop</h1>
          <p>아기 쇼핑몰</p>
        </Description>
        <img src="img/shop.jpg" alt="" />
      </BoxItem>
    </Base>   
  )
}

const Base = styled.div`
  gap: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width:768px) {
    flex-direction: column;
    flex: 1 1 auto;
  }

  > div:first-of-type {
    background-color: #843ee6;
  }

  > div:nth-of-type(2) {
    background-color: gray;
  }

  >div:nth-of-type(3) {
    background-color: #000;

    > img {
      transition: all 1s;
      &:hover {
        transform: scale(1.3);
      }
    }
  }
  >div:last-of-type {
    background-color: #9b9c94;
    
    > img {
      transition: all 1s;
      &:hover {
        transform: scale(1.3);
      }
    }
  }
`

const BoxItem = styled.div`
color: #fff;
overflow: hidden;
display: flex;
flex-direction: column;
gap: 2rem;
width: 48%;
cursor: pointer;
@media (max-width:768px) {
  width: 100%;
}

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    transition: all 1s;

    @media (max-width:768px) {
      max-height: 400px;
    }
    &:hover {
      object-position: bottom;
    }
  }
  max-height: 400px;
  border-radius: 25px;
`

const Description = styled.div`
  padding: 1rem;

  >h1 {
    font-weight: bold;
    font-size: 20px;
  }
> p {
  padding-top: 10px;
  font-size: 14px;
  color: #dadada;
}
`

export default Projects
