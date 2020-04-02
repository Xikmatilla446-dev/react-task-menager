import styled, {css} from "styled-components";


export const FormElement = styled.form`
 
   width: 580px;
   display: flex;
   flex-direction: column;
   margin: 0 auto;
   //border: 1px solid aqua;
   padding: 20px 20px;
   box-sizing: border-box;
   

  .title{
    margin: 10px 0;
  }

  .buttons{
    display: flex;
    justify-content: space-between;

  }
`;




export const H1 = styled.h1`

   $sub-color: grey; 
   $main-color: black;
  

 font-size: 2.5rem;
 color: $main-color;
 font-family: Arial;
 text-align: center; 
 padding: 0px;
 margin: 0; 
`;



export const LabelForData = styled.label`

   margin-left: -10px;
   margin-top: -25px;
   position: absolute;
`;




export const GridTwo = styled.div`
    
    margin-top: 55px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1em;
    margin: 0 auto;
    
  

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

