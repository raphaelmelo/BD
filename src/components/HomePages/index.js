import Styled from 'styled-components'
import Header from '../Header/index'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';


const WrapperHome = Styled.section`
    display:flex;
    flex-direction:column;
    height:50vh;
 
    
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
    font-size: clamp(1.9rem, 4vw, 8.5rem);
 
   }

   p { 
    
    font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: clamp(.9rem, 2.2vw, 4.5rem);
      text-transform: uppercase;
       
   }
` 


export default function Home(props) {

  return (
    <Container maxWidth="lg">
      <WrapperHome>


      <TitleDescriptionDiv>
        <Typography   component="h1" gutterBottom>
          {props.title}    
        </Typography>
        <Typography variant="subtitle1"   component="p" gutterBottom>
          {props.description}    
        </Typography>

      </TitleDescriptionDiv>
        
      </WrapperHome>
      </Container>
   )
}
