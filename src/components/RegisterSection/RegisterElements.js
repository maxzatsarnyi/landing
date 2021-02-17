import styled from 'styled-components';
import {Link} from 'react-scroll';

export const RegisterContainer = styled.div`
    
    height: 1125px;
    margin: 0 auto;
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px){
        height: 970px;
    }
    @media screen and (max-width: 480px){
        height: 910px;
    }
`

export const RegisterWrapper = styled.div`
    margin: 0 auto;
    max-width:1170px;

    display: flex;
    flex-direction:column;
    justify-content: center;
`


export const RegisterH1 = styled.h1`

    line-height: 54px;
    font-weight: 400;
    font-size: 50px;
    color: #000;
    text-align:center;

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

export const RegisterH2 = styled.h2`
    font-size: 16px;
    color: rgb(77, 76, 76);
    line-height: 1.5;
    text-align: center;
    max-width: 470px;
    height: 41px;
    margin: 15px auto 0;

    @media screen and (max-width: 768px){
        max-width: 450px;

    }
    @media screen and (max-width: 480px){
        max-width: 300px;

    }
`

export const RegisterP = styled.p`
    font-size: 16px;
    color: rgb(77, 77, 77);
    text-align: justify;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 470px;

    margin: 0 auto;

    @media screen and (max-width: 480px){
        max-width: 330px;
        align-items: flex-start;
        margin-top: 30px;
    }
`

export const LabelItem = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    
`


export const Label = styled.label`
    margin-top: 25px;
    font-size: 16px;
    /* color: rgb(39, 42, 45); */
    color: black;
    font-weight: 600;
    line-height: 1.75;
    
`


export const Input = styled.input`
    padding-left: 10px;
    margin-top: 8px;
    border-width: 1px;
    border-style: solid;
    border-radius: 4px;
    height: 36px;
    font-size: 16px;
    color: rgb(178, 183, 190);
    line-height: 1.75;

    &:focus{
        outline-color: #80bdff;
        border-color: #e6f2ff;
    }

    &:disabled{
        background-color: #e9ecef;
    }

`

export const BtnWrapForm = styled.div`
    margin: 0 auto;
`

export const ButtonForm = styled.button`
    margin-top: 30px;
    outline: none;
    border: 0;
    font-size: 16px;
    color: rgb(254, 254, 254);
    text-align: center;
    transition: 0.3s ease-in-out;
    cursor: pointer;
    border-radius: 4px;
    color: white;
    background: var(--primary-color);
    width: 210px;
    height: 38px;
    padding: 10px 55px;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover{
        transition: 0.3s ease-in-out;
        color: white;
        background: #cc4636;
    }

    
`

export const Register = styled.div`
    
`
export const RadioButtons = styled.div`
    /* margin-top: 25px; */
    /* width: 465px; */
    width: 100%;
    @media screen and(max-width: 768px){
        margin-top: 0;
    }
    @media screen and(max-width: 768px){
        margin-top: 0;
    }
`

export const LabelRadio = styled.label`
    font-size: 16px;
    color: rgb(39, 42, 45);
    line-height: 1.75;
    font-weight: 600;
    display: flex;
    align-items:center;
`


export const RadioItem = styled.div`
    display: flex;
    align-items: center;
    margin-top: 5px;
   
`

export const Span = styled.span`
  font-size: 12px;
  color: rgb(110, 116, 124);
  line-height: 1.2;
  text-align: left;
  margin-top: 6px;
`
export const SpanError = styled.span`
    color: red;
    margin-top: 3px;
`

export const Radio = styled.input`
    border-radius: 50%;
    background-color: rgb(69, 122, 251);
    width: 16px;
    height: 16px;
    margin-right: 8px;
`

export const FileWrap = styled.div`
    display: flex;
    /* flex-direction: column; */
`

export const InputUpload = styled.input`
    
`

export const LabelPhoto = styled.label`
    margin-top: 25px;
    margin-bottom: 10px;
    width: 100%;
    text-align: left;
    font-size: 16px;
    color: black;
    font-weight: 600;
    line-height: 1.75;
`


