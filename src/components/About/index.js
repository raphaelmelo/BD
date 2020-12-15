import React from 'react';
 import Typography from '@material-ui/core/Typography';

import { Wrapper, WrapperAbout } from './style'

 
 
 

export default function About() {

    return (
        <Wrapper>
                 <WrapperAbout>
                        <Typography variant="h4" component="h2" >
                        Nossa História
                        </Typography>
                        <Typography variant="body1">
                        Nossa recente história começou logo após mudarmos de negócio, 
                        éramos um lava rápido com muitos clientes do bairro. com o tempo
                        clientes começaram a nos pedir uma cerveja enquanto esperavam seus carros. 
                        <br />
                        Assim percebemos que havia uma grande oportunidade de empreender no bairro,
                        seríamos uma ótima opção de entretenimento e diversão como bar e espetaria
                        com jogos e música ao vivo próximo aos nossos clientes.
                        </Typography>
                        <Typography variant="h5" component="h3" >
                        Nossa Estrutura
                        </Typography>
                        <Typography variant="body1">
                        Garçons; <br />
                        Mesas e cadeiras; <br />
                        Snoorkers; <br />
                        Televisores <br />
                        <span>Em breve:</span> <br />
                        Porções <br />
                        Pizzas <br />
                        </Typography>
                 </WrapperAbout>
         </Wrapper>
    )
}
