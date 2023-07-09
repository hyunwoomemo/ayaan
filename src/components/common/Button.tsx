import { css } from '@emotion/react';
import styled from '@emotion/styled'
import { useNavigate } from 'react-router-dom'

interface ButtonProps {
  children: React.ReactNode
  bgc: string,
  shape?: string,
  path?: string,
}
const Button = ({ children, ...props }: ButtonProps) => {
  const navigate = useNavigate();
  const handleClick = () => {
    if (!props.path) return;
    navigate(`${props.path}`)
  }
  return (
    <Base bgc={props.bgc} shape={props.shape} onClick={handleClick}>{children}</Base>
  )
}

const Base = styled.button<ButtonProps>`
border: 0;
cursor: pointer;
transition: all .3s;

${({ shape }) => shape === 'round' ? css`
  border-radius: 50%;
  width: 45px;
  height: 45px;
  svg {
    width: 100%;
    height: 100%;
  }
  color: #fff;
` : css`
border-radius: 15px;
padding: 15px 25px;
`}


${({ bgc }) => bgc ? css`
  background-color: ${bgc};
  color: #fff;
  > a {
    color: #fff;
  }

` : css`
background-color: #fff;
color: #000;
`}

a {
    text-decoration: none;

    &:visited {
      color: #000;
    }
  }
`

export default Button