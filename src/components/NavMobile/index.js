import React from 'react';

import Link from 'next/link'


import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import { ListItemText } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';


import { MenuLogo, NavMobile, ListMenuStyled, ItemMenuStyled, } from './style'


const useStyles = makeStyles({
    list: {
        width: "50vw",
    },
    fullList: {
        width: 'auto',
    },
});


export default function Header() {
    // MENU MOBILE
    const classes = useStyles();
    const [state, setState] = React.useState({
        left: false
    });
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };
    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >

        </div>
    );

    return (
        <>
            <NavMobile>
                {['☰'].map((anchor) => (
                    <React.Fragment key={anchor}>
                        <Button onClick={toggleDrawer(anchor, true)} >{anchor}</Button>
                        <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>

                            <ListMenuStyled>
                                <MenuLogo>
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
                                  </MenuLogo>
                                <Divider />

                                <Link href="/">
                                    <ItemMenuStyled button>
                                        <ListItemText primary={"Home"} />
                                    </ItemMenuStyled>
                                </Link>
                                <Divider />
                                <Divider />
                                <Link href="/cardapio">
                                    <ItemMenuStyled button>
                                        <ListItemText primary={"Cardápio"} />
                                    </ItemMenuStyled>
                                </Link>
                                <Divider />

                                <Link href="/sobre">
                                    <ItemMenuStyled button>
                                        <ListItemText primary={"Sobre Nós"} />
                                    </ItemMenuStyled>
                                </Link>
                                <Divider />

                                <Link href="/contato">
                                    <ItemMenuStyled button>
                                        <ListItemText primary={"Contato"} />
                                    </ItemMenuStyled>

                                </Link>

                                <Divider />
 
                            </ListMenuStyled>
                        </Drawer>
                    </React.Fragment>
                ))}
            </NavMobile>
        </>



    )
}
