import styled from 'styled-components';
import {Link} from 'react-scroll';

export const InfoContainer = styled.div`
    
    height: 720px;
    margin: 0 auto;
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px){
        height: 655px;

    }

    @media screen and (max-width: 480px){
        height: 860px;
        
    }
`

export const InfoWrapper = styled.div`
    /* max-width: */ 
    max-width:1170px;
    
    margin: 0 auto;
`

export const InfoWrap = styled.div`
    display: flex;

    @media screen and (max-width: 480px){
        flex-direction: column;
        align-items: center;
    }
`

export const InfoContent = styled.div`
    max-width: 550px;
    margin-left: 65px;

    @media screen and (max-width: 768px){
        max-width: 435px;
        margin-left: 30px;
        margin-right: 5px;
    }

    @media screen and (max-width: 480px){
        max-width: 335px;
        margin-left: 0;
        
    }
`

export const InfoH1 = styled.h1`

    line-height: 54px;
    font-weight: 400;
    font-size: 50px;
    color: #000;
    text-align:center;
    margin-bottom: 65px;

    @media screen and (max-width: 768px){
        font-size: 40px;
        line-height: 50px;

    }

    @media screen and (max-width: 480px){
        font-size: 30px;
        line-height: 50px;
        margin-bottom: 30px;
    }
`

export const InfoH2 = styled.h2`
    font-size: 24px;
    color: rgb(39, 42, 45);
    line-height: 29px;
    text-align: left;
    margin-bottom: 26px;

  @media screen and (max-width: 480px){
        margin-top: 35px;
        margin-bottom: 20px;

        text-align:center;
    }
`

export const InfoP = styled.p`
    font-size: 16px;
    color: rgb(77, 77, 77);
    text-align: justify;
    margin-bottom: 30px;
`

export const InfoBtnWrap = styled.div`
    
    @media screen and (max-width: 480px){
        text-align: center;
    }
`
export const InfoBtn = styled(Link)`
    font-size: 16px;
    color: rgb(209, 91, 78);
    text-align: left;
    cursor: pointer;
    text-decoration:none;

    &:hover{
        color: red;
    }

    
`

export const ImgWrapper = styled.div`
`

export const Img = styled.img`
    max-height: 285px;

    @media screen and (max-width: 768px){
        max-height: 210px;
    }

    @media screen and (max-width: 480px){
        max-height: 245px;
    }
`


