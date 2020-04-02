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


export const DivHome = styled.div`

   $main-color: #fff;
   
   width: 100%;
   height: auto;
   top: 10px;
   background: $main-color;
  

`;

export const DivIcon = styled.div`

   $main-color: #fff;
   width: 100%;
   display: flex;
   all-space-treatment: 2px;
   box-sizing: border-box;
   border: 1px solid black;
   outline: black;  
   background: white;
   padding: 20px;
   text-align: center; 
   &:hover{
   background: #cccc;
   }

`;
export const Hover = styled.div`

   $main-color: #fff;
   padding: 5px 0px;
   box-sizing: border-box;
   width: 25%;
   cursor: pointer;
   text-align: center; 
   &:hover{
   background: white;
   
   }

`;


export const Tr2 = styled.tr`

   $sub-color: grey; 
   $main-color: black;
 

 font-size: 1rem;
 color: $main-color;
 background: white;
 padding: 15px;
 box-sizing: border-box;
 border: 1px solid black;
 outline: black;
 width: 100px;
 &:hover  td{
 background: #dcebf9;
 color: blue;
 
 }
 
 
`;

export const ID = styled.td`

   $sub-color: grey; 
   $main-color: black;
 
 font-size: 1rem;
 color: black;
 background: aliceblue;
 padding: 0px;
 text-align: center;
 border-style:ridge;
 font-weight: bold;
 box-sizing: border-box;
 border: 1px solid black;
 outline: black;
 width: 2px;
 
 
`;

export const Td2 = styled.td`

   $sub-color: grey; 
   $main-color: black;
  

 font-size: 1rem;
 color: $main-color;
 font-weight: bold;
 background: white;
 padding: 15px;
 box-sizing: border-box;
 border: 1px solid black;
 outline: black;
 width: 100px;
 
 }
 
`;
export const Table2 = styled.table`

   $sub-color: grey; 
   $main-color: black;
  

 font-size: 1rem;
 color: blue;
 background: white;
 padding: 15px;
 box-sizing: border-box;
 border: 1px solid black;
 outline: black;
 width: 100%;
 
 
`;
export const Thead2 = styled.thead`

   $sub-color: grey; 
   $main-color: black;

 font-size: 1rem;
 color: #3c46a9;
 background: white;
 padding: 15px;
 box-sizing: border-box;
 border: 1px solid black;
 outline: black;
 width: 100%;
 
 
`;


export const Th2 = styled.th`

   $sub-color: grey; 
   $main-color: black;
  

  text-transform: uppercase;
 font-size: 1rem;
 color: cornflowerblue;
 background: white;
 padding: 15px;
 box-sizing: border-box;
 border: 1px solid black;
 outline: black;
 width: 100px;
 
 
`;
export const Tbody2 = styled.tbody`

   $sub-color: grey; 
   $main-color: black;
  

 font-size: 1rem;
 color: black;
 background: white;
 padding: 15px;
 box-sizing: border-box;
 border: 1px solid black;
 outline: black;
 width: 100%;
 
 
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

  border: none;
  cursor: pointer;
  float: right;
  outline: none;
  border-radius:5px;
  padding: 7px 10px;
  background: chartreuse;
  color: #fff;
  &:hover{
  background: blue;
  }
    
`;

