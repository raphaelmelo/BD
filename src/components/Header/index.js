import Styled from 'styled-components'
import Container from '@material-ui/core/Container';
import Link from 'next/link'
import NavMobile from "../NavMobile"

const HeaderStyled = Styled.header`
    height: 100px;
     display:flex;
    justify-content:space-between;
    align-items:center;
 
`
const WrapperNav = Styled.article`
    display:flex;
    gap:40px;


       
`
const LogoStyledDiv = Styled.div`
    img {
        width: clamp(130px, 14vw, 180px);
    }

`
const NavList = Styled.ul`
    list-style:none;
    display:flex;
    gap:10px;
    text-transform:uppercase;
    font-weight: bold;
    font-size: 14px;
    line-height: 21px;
    color: #FFFFFF;

        
@media (max-width: 600px) {
    display:none;
}

`
const NavItem = Styled.li`

`

const SocialMedia = Styled.article`
    display:flex;
    gap:10px;   

    img {
        width:24px;
    }

    @media (max-width: 600px) {
    display:none;
}

`

export default function Index() {

    return (
        <Container >
            <HeaderStyled>
                <LogoStyledDiv>
                             <Link href="/">
                                <a>
                                <img src={"/logomarca.svg"} alt={"Logomarca Direitinho.com"} />
                                </a>
                            </Link>
                </LogoStyledDiv>
                <WrapperNav>
                    <nav>
                        <NavList>
                            <Link href="/">
                                <a>
                                    <NavItem>Home</NavItem>
                                </a>
                            </Link>
                            <Link href="/cardapio">
                                <a>
                                    <NavItem>Cardápio</NavItem>
                                </a>
                            </Link>
                            <Link href="/sobre">
                                <a>
                                    <NavItem>Sobre</NavItem>
                                </a>
                            </Link>
                            <Link href="/contato">
                                <a>
                                    <NavItem>Contato</NavItem>
                                </a>
                            </Link>
                        </NavList>
                        <NavMobile />
                    </nav>
                    <SocialMedia>
                        <Link href="https://www.facebook.com/direitinho.con">
                            <a target="blank">
                                <img src={"/social/fb-white.svg"} alt={"Facebook"} />
                            </a>
                        </Link>
                        <Link href="https://www.instagram.com/direitinhocarwash/">
                            <a target="blank">
                                <img src={"/social/insta-white.svg"} alt={"Instagram"} />
                            </a>
                        </Link>
                        <Link href="https://twitter.com/DireitinhoC">
                            <a target="blank">
                                <img src={"/social/tw-white.svg"} alt={"Twitter"} />
                            </a>
                        </Link>
                    </SocialMedia>
                </WrapperNav>
            </HeaderStyled>

        </Container>
    )
}
