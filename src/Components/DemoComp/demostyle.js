import styled from 'styled-components';
import { Card } from 'react-bootstrap';


const Headtitle = styled.h1`
    padding-top: 20px;
    font-size: 28px ;
    font-weight: 500;
    color:  ${({ textcolor }) => textcolor || '#333'} ;
    text-align:center;
    font-family: 'Roboto', sans-serif;
`


const StyledCard = styled(Card)`
  &.card{
  background: ${({ color }) => color || 'white'};
  border-radius: 18px !important;
  display: inline-block;
  height: ${({ height }) => height || '330px'} ;
  width: ${({ width }) => width || '700px'} ;
  margin: 1rem;
  position: relative;
  
  }
 :hover{
    box-shadow: 0 4px 8px 0 #00000026, 0 6px 20px 0 #0000006c;
   transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
   cursor:pointer;
  }
`

const Button = styled.button`
  width: 100%;
  background-color: #11b9cf;
  color: #000000;
  padding: 14px 20px;
  margin: 10px;
  border: none;
  width:350px;
  border-radius: 4px;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  font-size: 25px;
  font-weight:600;
:hover {
  background-color: #0e927c;
}
`

const Result = styled.h1`
  margin-left:-200px;
  font-size: 30px;
  padding: 15px;
  font-weight:600;
  font-family:'Roboto', sans-serif;
`

const Title = styled.h1`
  font-size: 28px;
  padding: 15px;
  margin:20px;
  font-weight:600;
  font-family:'Roboto', sans-serif;
`
const Text = styled.p`
  font-size: 22px;
  padding: 15px;
  margin:4px;
  font-weight:600;
  font-family:'Roboto', sans-serif;
`


export { StyledCard, Headtitle, Button, Result, Title, Text };