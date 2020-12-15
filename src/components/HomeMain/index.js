import Styled from 'styled-components'
import Header from '../Header/index'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';


const WrapperHome = Styled.section`
    display:flex;
    flex-direction:column;
    height:90vh;
  ` 
const TitleDescriptionDiv = Styled.div`
   display:flex;
   flex-direction:column;
   justify-content:center;
   height:90%;
   display:flex;
 
   h1 {
    font-family:"Roboto";
    line-height:120%;
    font-weight: 800;
    font-size: clamp(2.5rem, 4.2vw, 8.5rem);
    text-transform:uppercase;
   }

   p { 
    
    font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      text-transform: uppercase;
      color: #fff;
  
   }
` 


export default function Home() {

  return (
    <Container maxWidth="lg">
      <WrapperHome>


      <TitleDescriptionDiv>
        <Typography   component="h1" gutterBottom>
        CERVEJA, <br/> 
        CHURRASCO<br/> 
        & FUTEBOL.
        </Typography>

        <Typography variant="subtitle1"   component="p" gutterBottom>
        No Direitinho.com temos tudo
        <br /> que um ser humano precisa!
      </Typography>

      </TitleDescriptionDiv>
        
      </WrapperHome>
      </Container>
   )
}
