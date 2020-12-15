import React from 'react';
import Link from 'next/link'
import { Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components'

 const Wrapper = styled.section`
    min-height:90vh;
    height:100%;
    width:100%;
    background: #FE9A00;
    display:flex;
    justify-content:center;
    align-items:center;
    padding: 30px 0;

`
 const WrapperFooter = styled.article`
    min-height:400px;
    display:flex;
    background: #EBF2F5;
    justify-content:space-evenly;
    align-items:center;
 
`

 const LogoFooter = styled.footer`
    min-height:248px;

    img {
            width: clamp(8rem,8vw,16.5rem); 
        }

    @media (max-width: 600px) {
    display:none;
}

p {
        
    font-family: Roboto Condensed;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 120.8%;
    

    color: #FE9A00;
}

`

 const WrapperFooterInfos = styled.article`
    display:flex;  
    flex-direction:column;
    justify-content:space-evenly;
    align-items:space-evenly;
    min-height:300px;
    color:#BC8E38;
    @media (max-width: 600px) {
    justify-content:center;
    align-items:center;
}
`

 const InfosFooter = styled.article`
    display:flex; 
    justify-content:space-between;
    font-weight:400;
    gap:5px; 
    align-items:center;
    @media (max-width: 600px) {
    padding:60px 0;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:30px;
    article {
        width:100%;
        text-align:center;
    }
}
  
`

 const LinksFooter = styled.article`
    display:flex;
    flex-direction:column;
    span {
        font-weight:700;
    }
    li {
        list-style:none;
      }
`

 const ContactFooter = styled.article`
    height:100px;
    
     span {
         font-weight:700;
    }
    li {
        list-style:none;
      }
`
 const AddressFooter = styled.article`
    width:30%;
    span {
        font-weight:700;
    }
    li {
        list-style:none;
      }
`
 const CardsFooter = styled.article`
    display:flex;
    justify-content:flex-start;
    align-items:flex-start;
    flex-direction:column;
    height:100px;

    span {
        font-weight:700;
        text-transform:uppercase;
        font-size:14px;
    }
    img {
        padding:4px;
        height:80px;
    }
`
 const Credits = styled.article`
    display:flex;
    justify-content:flex-end;
    align-items:center;
    color:#BC8E38;
    font-size:12px;
    text-transform:uppercase; 
    span {
        background:#EFEFEF;
        padding: 0 5px;
    }
`

export default function Index() {
    return (
        <Wrapper>
            <Container >
                <WrapperFooter>
                    <LogoFooter>
                        <Typography variant="body1" component="p" gutterBottom>
                        CERVEJA, <br />CHURRASCO <br /> & FUTEBOL
                        </Typography>
                        <Link href="/">
                                <a>
                                <img src={"/logomarca.svg"} alt={"Logomarca Direitinho.com"} />
                                </a>
                            </Link>
                        </LogoFooter>
                    <WrapperFooterInfos>
                        <InfosFooter>
                            <LinksFooter>
                                <span>NAVEGUE</span>
                                <li>
                                <Link href="/">
                                <a>HOME</a>
                                </Link>
                                </li>
                                <li>
                                <Link href="/cardapio">
                                <a>CARDÁPIO</a>
                                </Link>
                                </li>      <li>
                                <Link href="/sobre">
                                <a>SOBRE</a>
                                </Link>
                                </li>      <li>
                                <Link href="/contato">
                                <a>CONTATO</a>
                                </Link>
                                </li>             
                            </LinksFooter>
                            <ContactFooter>
                                <Typography variant="subtitle1" component="p" gutterBottom>
                                    <span>TELEFONES</span> <br />
                                    <Link href="https://api.whatsapp.com/send?phone=55139981801237&text=Ol%C3%A1,%20gostaria%20hoje%20estara%20aberto">
                                    <a target="_blank">(13) 981801237</a>
                                    </Link>
                                    <br/>
                                
                                </Typography>
                            </ContactFooter>
                            <AddressFooter>
                                <Typography variant="body1" component="p" gutterBottom>
                                    <span>ENDEREÇO</span>
                                    <br />
                                    Avenida Pedro Lessa, 1311 - Aparecida, Santos - SP, CEP:11025-001
                                    </Typography>
                            </AddressFooter>
                        </InfosFooter>
                        <CardsFooter>
                             <img src="/bandeiras-de-cartoes.svg" alt="cartões de credito aceitos" />
                        </CardsFooter>
                        <Credits>
                            <span>Desenvolvido por Raphael Melo & Victor Mendes</span>
                        </Credits>
                    </WrapperFooterInfos>
                </WrapperFooter>
            </Container>
        </Wrapper>
    )
}
