import styled from '@emotion/styled'
import Header from '../components/common/Header'
import Introduce from '../components/main/Introduce'
import Products from '../components/main/Projects'
import Contact from '../components/main/Contact'

const Main = () => {

  return (
    <Base>
      <Header />
      <Container>
        <Introduce />
        <Products />
        <Contact />
      </Container>
    </Base>
  )
}

const Base = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`

const Container = styled.div`
padding: 2rem 0;
display: flex;
flex-direction: column;
gap: 2rem;
`

export default Main