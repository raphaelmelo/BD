import React from 'react';
import Fab from '@material-ui/core/Fab';
import styled from 'styled-components'
import Link from 'next/link'


const WrapperButton = styled.div`
    position:fixed;
    bottom:20px;
    right:7vw;


`
const Button = styled(Fab)`
 
    
    img {
        width:40px;
        padding-right:10px;
    }
    span {
        color:#FE9A00;
        font-weight:700;
        font-size:18px;
    }
`
 function ActionButtons() {

    return (
        <WrapperButton >
            <Link href="https://api.whatsapp.com/send?phone=5513981801237&text=Olá"> 
            <a target="_blank">
                <Button variant="extended">
                    <img src="social/whatsapp.svg" alt="Entre em contato conosco pelo whatsapp" />
                    <span>(13)981801237</span> 
                    </Button>
            </a>
            </Link>
        </WrapperButton>
    );
}

export default ActionButtons;
