import Styled from 'styled-components'
import Header from '../Header/index'
 import Typography from '@material-ui/core/Typography';


const BackgroundSnooker = Styled.section`
   height:400px;
   display:flex;
   width:100%;

   flex-direction:column;
   background-image:url("/sinuca.webp");
     
 `

const Filter = Styled.article` 
   height:500px;
   width:100%;
   background:rgba(0,0,0,0.8); 
   display:flex;
   flex-direction:column;
   justify-content:center;
   padding-left:7%;

   h2 {
      font-family: Roboto Condensed;
      font-style: normal;
      font-weight: bold;
      color: #FFFFFF;
      font-size: clamp(2.5rem, 4.8vw, 8.5rem);

   }

   p {
      
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      text-transform: uppercase;
      color: #FE9A00;
   }
`


export default function Home() {

   return (
      <BackgroundSnooker>
         <Filter>
            <Typography variant="h2" component="h2" >
            MESAS DE SINUCA
            </Typography>
            <Typography variant="h6" component="p" >
            sua diversão entre amigos está garantida aqui no Bar Direitinho 
            </Typography>
         </Filter>
      </BackgroundSnooker>
   )
}
