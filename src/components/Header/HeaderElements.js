import styled from 'styled-components';
import img from '../../images/banner-photo.jpg';
import {Button} from '../ButtonElements';

export const HeaderContainer = styled.div`
    background: url(${img}) no-repeat;
    background-size: cover;

    height: 600px;
    margin: 0 auto;
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px){
        height: 500px;
    }

    @media screen and (max-width: 480px){
        height: 400px;
    }
`

export const HeaderWrapper = styled.div`
    /* max-width: */
    max-width: 1170px;
    /* margin: 0 auto; */

    @media screen and (max-width: 768px){
        margin: 0;
    }
    @media screen and (max-width: 480px){
        margin: 0 auto;
    }
`

export const HeaderContent = styled.div`
    max-width: 530px;
    height: 375px;
    margin-left: 29px;
    
    @media screen and (max-width: 768px){
        max-width: 450px;
        height: 370px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    

    }

    @media screen and (max-width: 480px){
        max-width: 330px;
        height: 250px;
        margin-left: 0;

    }
`

export const HeaderH1 = styled.h1`
    white-space: pre-line;
    margin-bottom: 25px;
    line-height: 54px;
    font-weight: 400;
    font-size: 50px;
    color: rgb(255, 255, 255);
    text-align: left;

    @media screen and (max-width: 768px){
        font-size: 40px;
        line-height: 44px;

    }

    @media screen and (max-width: 480px){
        font-size: 30px;
        line-height: 34px;
        text-align: center;
    }
`

export const HeaderP = styled.p`
    margin-bottom: 40px;

    font-size: 16px;
    color: rgb(255, 255, 255);
    line-height: 1.5;
    text-align: left;

    @media screen and (max-width: 480px){
        text-align: center;
        line-height: 24px;

        span{
            display: none;
        }
    }
`

export const HeaderBtnWrap = styled.div`

    @media screen and (max-width: 480px){
       ${Button}{
           margin: 0 auto;
       }
    }
`

