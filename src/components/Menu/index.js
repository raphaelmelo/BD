import { Typography } from '@material-ui/core'
import Styled from 'styled-components'


const Wrapper = Styled.section`
   background:#EBF2F5;
   min-height:100vh;
   width:100%;
   margin:0;
   padding: 0  0 80px 0;
   display:flex;
   flex-direction:column;
   align-items:center;
   box-shadow: 5px -20px 30px rgba(0,0,0,0.2);
   color:#00000070;

   h2 {
      padding:40px 0 60px;
      font-family: Roboto Condensed;
      font-style: normal;
      font-weight: bold;
      font-size: clamp(1.6rem, 3.2vw, 6.5rem);
       line-height: 120.8%;
      text-transform: uppercase;
      color: #FE9A00;
   }
`

const WrapperMenu = Styled.div`
   height:100%;
   min-height:600px;
   display:flex;
   align-items:center;
   justify-content:center;
   flex-wrap:wrap;
   gap: 40px 0;
`

const ItemMenu = Styled.div`
   width: 50%;
   min-width: 300px;  
   display:flex;
   flex-direction:column;
   align-items:center;
   justify-content:center;
`

const TitleImageMenu = Styled.div`
   display:flex;
   width:100%;
   align-items:center;
   justify-content:flex-start;
   gap:10px;
   img {
      height:50px;
   }
   h3 {
      font-family: Roboto Condensed;
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 42px;
      text-align: center;
      text-transform: uppercase;
      color: #FE9A00;
      }

`
const InfosMenu = Styled.div`
   display:flex;
   flex-direction:column;
   gap:10px;
   ul {
      list-style:none;
   }
   li {
      font-family: Roboto;
      font-size: 18px;
      text-transform: uppercase;
      color: rgba(0, 0, 0, 0.7);
   }
`

export default function Home() {

   return (
      <Wrapper>
         <Typography variant="h3" component="h2">
            CARDÁPIO
         </Typography>
         <WrapperMenu>
            <ItemMenu>
               <InfosMenu>
                  <TitleImageMenu>
                     <img src="/breja.svg" alt="Cervejas Geladas" />
                     <Typography variant="h5" component="h3">
                        Cerveja gelada
                  </Typography>
                  </TitleImageMenu>
                  <ul>
                     <li>Skol (Lata)</li>
                     <li>Petra (Lata)</li>
                     <li>Império (Lata)</li>
                     <li>Amstel (Lata)</li>
                     <li>Itaipava (Lata)</li>
                     <li>Heineken (LONG-NECK)</li>
                     <li>Stella Artois (LONG-NECK)</li>
                     <li>BUDWEISER LONG-NECK</li>
                  </ul>
               </InfosMenu>
            </ItemMenu>
            <ItemMenu>
               <InfosMenu>
                  <TitleImageMenu>
                     <img src="/drink.svg" alt="Cervejas Geladas" />
                     <Typography variant="h5" component="h3">
                        Drinks
                  </Typography>
                  </TitleImageMenu>
                  <ul>
                     <li>Hi-Fi & Gin</li>
                     <li>Batida Limão</li>
                     <li>Batida Amendoin</li>
                     <li>Batida Maracujá</li>
                     <li>Caipirinha de Vodka</li>
                     <li>Caipirinha de cachaça</li>
                     <li>Dreher com mel e limão</li>
                  </ul>
               </InfosMenu>
            </ItemMenu>
            <ItemMenu>
               <InfosMenu>
                  <TitleImageMenu>
                     <img src="/refrigente.svg" alt="Cervejas Geladas" />
                     <Typography variant="h5" component="h3">
                        Não alcoólicas
                  </Typography>
                  </TitleImageMenu>
                  <ul>
                     <li>Coca-cola </li>
                     <li>Guaraná</li>
                     <li>Soda</li>
                     <li>Fanta</li>
                     <li>Água</li>
                     <li>Sucos</li> 
                  </ul>
               </InfosMenu>
            </ItemMenu>
            <ItemMenu>
               <InfosMenu>
                  <TitleImageMenu>
                     <img src="/espetinho.svg" alt="Cervejas Geladas" />
                     <Typography variant="h5" component="h3">
                        Espetinhos
                  </Typography>
                  </TitleImageMenu>
                  <ul>
                     <li>Carne</li>
                     <li>Frango</li>
                     <li>Linguiça</li>
                     <li>Coração</li>
                     <li>Pão de Alho</li>
                     <li>queijo Coalho</li>
                  </ul>
               </InfosMenu>
            </ItemMenu>

         </WrapperMenu>
      </Wrapper>

   )
}
