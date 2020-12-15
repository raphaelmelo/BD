import styled from 'styled-components'

export const Wrapper = styled.section`
    width:100%;
    background: #EBF2F5;
    display:flex;
    flex-direction:column;
     
    justify-content:center;
    align-items:center;

 

`
export const ConteinerAddress = styled.article`
    display:flex;
    justify-content:space-between;
    width:100%;
    height:100%;

    gap:50px 10px;
    padding:100px 15%;    
    flex-wrap:wrap;
    text-transform:uppercase;

    h3 {
        font-family: Roboto Condensed;
        font-style: normal;
        font-weight: bold;
         color: #FE9A00;
    }
   p {

    font-family: Roboto Condensed;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;

     color: rgba(0, 0, 0, 0.7);

   }

   @media (max-width: 600px) {
    justify-content:center;

}

` 



export const SocialMedia = styled.div`
    display:flex;
 
    gap:5px;

 
    
   img {
       width:35px;
       cursor:pointer;
   }

   div {
    display:flex;
    gap: 5px;

   }
   
` 


export const WrapperInfos = styled.div`
    display:flex;
    flex-direction:column;
    gap:26px;
    color: #706E6B;
 ` 

export const WrapperMap = styled.div`
   width:55%;
   min-width:300px;
     display:flex;
   justify-content:center;
   align-items:center;
    background:#FE9A00;
    border-radius:5px;
   img {
       width:100%;
       height:100%;
       transition: 0.5s all ease-in-out; 
       box-shadow: 2px 2px 10px #88888855;
       border-radius:5px;

       :hover {
        box-shadow: 3px 3px 15px #88888855;
       }
   }
` 

  
