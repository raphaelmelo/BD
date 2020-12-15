import styled from 'styled-components'

export const Wrapper = styled.section`
    width:100%;
    min-height:80vh;
    background: #EBF2F5;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    padding: 50px 0;

`
export const WrapperAbout = styled.article`
    display:flex;
    flex-direction:column;
    text-transform: uppercase;

    gap: 10px 0;
    width: 60%;

    h2, h3 {
    font-weight: bold;
    font-size: 30px;
     color: #FE9A00;    
    }

    h3 {
        font-size: 24px;
        padding-top: 30px;
    }
 
    p {
                
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
         color: #979494;
    }

    span {
        
    text-transform: uppercase;
    color: #FE9A00;    
    }

` 
