
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import styled from 'styled-components'



export const NavMobile = styled.div`
    display:none;
    
    button {
        font-size:40px;
        color:#FE9A00;
     }

@media (max-width: 600px) {
    display:flex;

}

`
export const MenuLogo = styled.div`
    height:120px;
    display:flex;
    justify-content:center;
    align-items:center;
    gap:12px;
    img {
        width: 40px;
        height:40px;
    }
 
`

export const ListMenuStyled = styled(List)`
    background: #191919  ;
    height:100%;
    width:85vw;
`

export const ItemMenuStyled = styled(ListItem)`
    height:10%;
    width:100%;

 
    span {
        font-size:32px;
        text-align:center;
        color:#fff;
        text-transform:uppercase;
        font-weight:900;
     }
 
`