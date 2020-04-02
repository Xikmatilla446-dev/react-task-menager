import styled, {css} from "styled-components";


export const Input = styled.input`
   
   $sub-color: grey; 
   $main-color: black;
  
    background: none;
    background-color: white;
    color: $sub-color;
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border: 1px solid black;
    position: relative;
    border-radius: 0;
    border-bottom: 1px solid $sub-color;
    margin: 25px 0;
    &:focus {
      outline: none;
    }
    
    &:focus + label {
      transform: scale(0.85);
    margin-left: 10px;
    margin-top: -90px;
    font-size: .9rem;
    }


`;

export const Label = styled.label`
   
   $sub-color: grey; 
   $main-color: black;


     color: $main-color;
    position: absolute;
    margin-top: -55px;
    //opacity: ${(props) => (props.prop ? '0' : '1')};
     ${(props) => props.prop && css`
    margin-left: 10px;
    margin-top: -90px;
    font-size: .9rem;
  
  `}
 
   
   
   
    pointer-events: none;
    font-size: 1rem;
    transition: all 0.1s;
    margin-left: 5px;
    
    
    

`;

export const Button = styled.button`
   
   $sub-color: grey; 
   $main-color: black;

  min-width: 100px;
  width: 20px;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 10px 0 10px;
  font-size: 15px;
  background-color: ${props => props.currentColor};
  color: black;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
   

`;







