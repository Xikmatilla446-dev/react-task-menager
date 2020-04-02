import styled, {css} from "styled-components";


export const H1 = styled.h1`
 font-size: 3rem;
 color: blue;
 font-family: ${(props) => props.theme.font}; 
 
`;

export const Button = styled.button`
 
  font-family: ${(props) => props.theme.font}; 
  font-size: 1.3rem;
  border: none;
  border-radius:5px;
  padding: 7px 10px;
  color: #fff;
  // background: ${(props) => (props.primary ? 'red' : 'green')}; 
  ${(props) => props.color && css`
    background: ${props => props.theme[props.color]};
  
  `}
  &:hover{
  background: blue;
  }
    
`;

