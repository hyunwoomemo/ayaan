import styled from '@emotion/styled'

interface BoxProps {
  children: React.ReactNode
}


const Box = ({children} : BoxProps) => {
  return (
    <Base>{children}</Base>
  )
}

const Base = styled.div`
  border-radius: 25px;
  flex: 1 1 auto;
  width: 100%;

`

export default Box;