import styled from '@emotion/styled'

const Image = () => {
  return (
    <Base>
      <img src="img/FrontEnd-Test-Image.png" alt="TestImage" />
    </Base>
  )
}

const Base = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
  > img {
    width: 600px;
    height: 600px;
  }
`

export default Image