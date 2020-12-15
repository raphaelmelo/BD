import React from 'react';
import { Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link'
import { Wrapper, ConteinerAddress, WrapperInfos, WrapperMap, SocialMedia } from './style'

export default function Providers() {
    return (
        <Wrapper>
            <Container >
                <ConteinerAddress>
                    <WrapperInfos>
                        <div>
                            <Typography variant="h5" component="h3">
                                Endereço
                                </Typography>
                            <Typography variant="body1" component="p">
                            Av. Pedro Lessa, 1311 <br /> Ponta da Praia, Santos - SP, 11025-001
                                </Typography>
                        </div>
                        <div>
                            <Typography variant="h5" component="h3">
                                Telefone & WhatsApp
                                </Typography>
                            <Typography variant="body1" component="p">
                                (13) 98180-1237
                                </Typography>
                        </div>
                        <div>
                            <Typography variant="h5" component="h3">
                                Redes Sociais
                                </Typography>
                            <SocialMedia>

                                <Link href="https://www.facebook.com/direitinho.con/">
                                    <a target="blank">
                                        <img src="/social/fb-black.svg" alt="Nossa página no Facebook" />
                                    </a>
                                </Link>
                                <Link href="https://www.instagram.com/direitinhocarwash/">
                                    <a target="blank">
                                        <img src="/social/insta-black.svg" alt="Nosso perfil no Instagram" />
                                    </a>
                                </Link>
                                <Link href="https://www.twitter.com/DireitinhoC">
                                   <a target="blank">
                                        <img src="/social/tw-black.svg" alt="Nosso perfil no Instagram" />
                                   </a>
                                </Link>
                            </SocialMedia>
                        </div>
                        <div>
                            <Typography variant="h5" component="h3">
                                Nosso Expediente
                                </Typography>
                            <Typography variant="body1" component="p"> 
                                quarta-feira a partir das 19h <br />
                                quinta-feira  a partir das 19h <br />
                                sexta-feira a partir das 19h <br />
                                sábado a partir das 19h <br />
                                domingo a partir das 19h
                            </Typography>
                        </div>
                        <div>
                            <Typography variant="h5" component="h3">
                                E-mail
                            </Typography>
                            <Typography variant="body1" component="p">
                            direitinhoespetaria@gmail.com
                            </Typography>
                        </div>
                    </WrapperInfos>
                    <WrapperMap>
                        <Link href="https://www.google.com/maps/dir//bar+direitinho.com/@-23.9745603,-46.3065525,16.75z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94ce03fbb4578bd9:0x5417755202f9dbbc!2m2!1d-46.3051603!2d-23.974016">
                            <a target="_blank" >
                            <img src="/address.webp" alt="Mapa com nosso endereço" />
                            </a>
                        </Link>
                    </WrapperMap>
                </ConteinerAddress>
            </Container>
        </Wrapper>
    )
}
