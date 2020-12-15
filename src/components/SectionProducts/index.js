import Styled from 'styled-components'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link'
import Button from '@material-ui/core/Button';
import Image from 'next/image'

const WrapperHome = Styled.section`
   background:#EBF2F5;
   min-height:400px;
   width:100%;
   margin:0;
   padding:0;
   box-shadow: 5px -20px 30px rgba(0,0,0,0.2);
   color:#00000070;
   
`
const MainElements = Styled.div`
   display:flex;
   align-items:center;
   justify-content:space-evenly;
   @media (max-width: 600px) {
      flex-direction:column;
      justify-content:center;
}
`
const MainLeft = Styled.article`
   min-height:600px;
   height:100%;
   width:350px;
   display:flex;
   flex-direction:column;
   align-items:start;
   justify-content:center;
   gap:25px;
   @media (max-width: 600px) {
      min-height:auto;
      padding: 40px;
      align-items:center;
      }
   
`
const CallActionText = Styled.div`
   font-family: Roboto Condensed;
   
   h2 {
      color:#FE9A00;
      text-transform:uppercase;
      font-weight: 600;
      width:300px;
      font-size:28px; 

      @media (max-width: 600px) {
         width:100%;
      }  
   }
`
const ButtonStyled = Styled(Button)`
   background:#000000 !important; 
   padding:6px 56px !important;
   color:#fff !important; 
   font-family: Roboto Condensed !important;
   font-weight: bold !important;
   font-size:24px !important;  
   :hover {
      background:#FE9A00!important;
   }
`

const VerticalLine = Styled.div`
   height: 280px;
   background:#9D9A9590;
   width: 1px;
   @media (max-width: 600px) {
      display:none;
   }
 
`
const MainRight = Styled.article`
   width:65%; 
   height:100%; 
   h2 {
      color:#FE9A00;
      text-transform:uppercase;
      font-weight: 600;
       font-size:20px;
   }
   p {
      color: rgba(0, 0, 0, 0.7);
      text-transform:uppercase;
      font-weight: 500;
      font-size:18px;
      line-height: 21px;
   }
   @media (max-width: 600px) {
      padding:45px 0;
      text-align:center;
   }
   
`
const MenuHome = Styled.article`
   height:100%;
   padding:0px 0;
   display:flex;
   gap:40px ;
   justify-content:center;
   align-items:center;
   flex-wrap:wrap; 
`
const MenuItem = Styled.article`
   width:300px;
   min-height:130px;
   height:auto;
   display:flex;
   justify-content:flex-start;
   align-items:start;
   gap:10px;
   @media (max-width: 600px) {
      flex-direction:column;
      align-items:center;
      justify-content:center;
      img {
         width:40px;
         height:40px;
      }
}
`

export default function Home() {

   return (
      <WrapperHome>
         <Container maxWidth="lg">
            <MainElements>
               <MainLeft>
                  <CallActionText>
                     <Typography variant="h4" component="h2">
                        Cerveja sempre <br />
                        Gelada e <br />
                        Espetinhos <br />
                        mega <br />
                        gostosos
                     </Typography>
                  </CallActionText>
                  <div>
                     <Link href="/cardapio">
                        <a><ButtonStyled variant="contained">cardápio</ButtonStyled></a>
                     </Link>
                  </div>
               </MainLeft>
               <VerticalLine />
               <MainRight>
                  <MenuHome>
                     <MenuItem>
                        <div>
                           <Image src="/breja.svg" alt="Cervejas Geladas" width={100} height={100} />
                        </div>
                        <div>
                           <Typography variant="h6" component="h2">Cerveja Gelada</Typography>
                           <Typography variant="body1">Petra, imperio, Amstel, Skol, Itaipava, Heineken, Stella Artois e Budweiser</Typography>
                        </div>
                     </MenuItem>
                     <MenuItem>
                        <div>
                           <Image src="/refrigente.svg" alt="Refrigerantes" width={100} height={90} />
                        </div>
                        <div>
                           <Typography variant="h6" component="h2">Refrigerantes</Typography>
                           <Typography variant="body1">Coca-cola, guaraná, Soda, Fanta Laranja</Typography>
                        </div>
                     </MenuItem>
                     <MenuItem>
                        <div>
                           <Image src="/espetinho.svg" alt="Espetinhos" width={100} height={100} />
                        </div>
                        <div>
                           <Typography variant="h6" component="h2">Espetinhos</Typography>
                           <Typography variant="body1">Carne, Frango, Linguiça, Coração, Pão de Alho e queijo coalho</Typography>
                        </div>
                     </MenuItem>
                     <MenuItem>
                        <div>
                           <Image src="/drink.svg" alt="Cervejas Geladas" width={100} height={100} />
                        </div>
                        <div>
                           <Typography variant="h6" component="h2">Drinks</Typography>
                           <Typography variant="body1">Caipiirinha de Vodka, Caiprinha de Cachaça, Dreher com mel e limão, hi-Fi, Gin</Typography>
                        </div>
                     </MenuItem>
                  </MenuHome>
               </MainRight>
            </MainElements>
         </Container>
      </WrapperHome>

   )
}
