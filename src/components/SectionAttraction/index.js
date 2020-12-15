import Styled from 'styled-components'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link'
import Image from 'next/image'

const WrapperHome = Styled.section`
   background:#EBF2F5;
   width:100%;
   min-height:600px;
   display:flex;
   align-items:center;
     
`
const MainElements = Styled.div`
   display:flex;
   align-items:center;
   justify-content:space-between;
   flex-wrap:wrap;

   @media (max-width: 600px) {
   flex-direction:column;
   justify-content:center;
   }
   
`
const MainLeft = Styled.article`
   width:30%; 
   min-width:300px;
   height:100%;
   display:flex;
   flex-direction:column;
   align-items:center;
   justify-content:center;
   padding:40px 0;
    
   h2 {
      color:#FE9A00;
      text-transform:uppercase;
      font-weight: 600;
      font-size:22px;
   }
   p {
      color: rgba(0, 0, 0, 0.7);
      font-weight: 500;
      font-size:18px;
      line-height: 21px;
      text-transform:uppercase;

   }
`
const MenuHome = Styled.article`
   height:100%;
   display:flex;
   gap:40px ;
   justify-content:center;
   align-items:center;
   flex-wrap:wrap; 
`
const MenuItem = Styled.article`
   width:300px;
   height:auto;
   display:flex;
   justify-content:flex-start;
   align-items:start;
   gap:10px;
 
`
const TitleSocial = Styled.div`
   font-family: Roboto Condensed;
   text-align:end;

   h2 {
      color:#FE9A00;
      text-transform:uppercase;
      font-weight: 600;
       font-size:28px; 
   }
   @media (max-width: 600px) {
      text-align:center;
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
   width:50%; 
   min-width:300px;

   height:100%;
   padding:10px 0 20px 60px;
   display:flex;
   flex-direction:column;
   gap:20px;
 
   h2 {
      color:#FE9A00;
      text-transform:uppercase;
      font-weight: 600;
       font-size:20px;
   } 

   @media (max-width: 600px) {
      width:100%; 
      justify-content:center;
      align-items:center;
       padding:80px 0;

   }
`
const MenuSocial = Styled.article`
   display:flex;
   gap:40px;

   
   @media (max-width: 600px) {
      justify-content:center;
      align-items:center;
      width:100%;   
   }

`
const MenuSocialItem = Styled.article`
   display:flex;

   img {

   }
   
`
const MenuSocialIcons = Styled.article`
   display:flex;
   flex-direction:column;
   justify-content:space-around;
   gap:5px;
`
export default function Home() {
   return (
      <WrapperHome>
         <Container maxWidth="lg">
            <MainElements>
               <MainLeft>
                  <MenuHome>
                     <MenuItem>
                        <div>
                           <Image src="/futebol.svg" alt="Cervejas Geladas" width={100} height={100} />
                        </div>
                        <div>
                           <Typography variant="h6" component="h2">Jogos ao vivo</Typography>
                           <Typography variant="body1">Venha assistir os principais eventos ao vivo.</Typography>
                        </div>
                     </MenuItem>
                     <MenuItem>
                        <div>
                           <Image src="/musica.svg" alt="Musica Ao vivo" width={70} height={90} />
                        </div>
                        <div>
                           <Typography variant="h6" component="h2">Cerveja Gelada</Typography>
                           <Typography variant="body1">Música ambiente e música ao vivo </Typography>
                        </div>
                     </MenuItem>
                  </MenuHome>
               </MainLeft>
               <VerticalLine />
               <MainRight>
                  <TitleSocial>
                     <Typography variant="h4" component="h2">
                        siga nas redes sociais para acompanhar nossa agenda de eventos ao vivo
                     </Typography>
                  </TitleSocial>
                  <MenuSocial>
                     <MenuSocialIcons>
                        <Link href="https://www.facebook.com/direitinho.con">
                           <a target="blank">
                              <Image src="/social/fb-black.svg" alt="Siga-nos no Facebook" width={60} height={60} />
                           </a>
                        </Link>
                        <Link href="https://www.instagram.com/direitinhocarwash">
                           <a target="blank">
                              <Image src="/social/insta-black.svg" alt="Siga-nos no Instagram" width={60} height={60} />
                           </a>
                        </Link>
                        <Link href="https://twitter.com/DireitinhoC">
                           <a target="blank">
                              <Image src="/social/tw-black.svg" alt="Siga-nos no Twitter" width={60} height={60} />
                           </a>
                        </Link>
                     </MenuSocialIcons>
                     <MenuSocialItem>
                        <Image src="/social/redes.svg" alt="Siga-nos no Facebook" width={300} height={200} />
                     </MenuSocialItem>
                  </MenuSocial>
               </MainRight>
            </MainElements>
         </Container>
      </WrapperHome>
   )
}
