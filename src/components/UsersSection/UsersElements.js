import styled from 'styled-components';

export const UsersContainer = styled.div`
    height: 1120px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    background-color: rgb(249, 249, 243);

    @media screen and (max-width: 768px){
        height: 1030px;
    }
    @media screen and (max-width: 480px){
        height: 1800px;
        /* height: 1100px; */
    }
`

export const UsersWrapper = styled.div`
    margin: 0 auto;
    max-width: 1170px;

    
    @media screen and (max-width: 768px){
        display: flex;
        flex-direction:column;
        
        align-items: center;
        justify-content: center;
    }
`

export const UsersH1 = styled.h1`
    line-height: 54px;
    font-weight: 400;
    font-size: 50px;
    color: #000;
    text-align:center;
    margin-bottom: 12px;

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

export const UsersP = styled.p`
    text-align: center;
    margin-bottom: 50px;
`

export const UsersContent = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 125px;
    grid-row-gap: 25px;
    padding-left: 0;

    @media screen and (max-width: 768px){
        grid-column-gap: 40px;
    }

    @media screen and (max-width: 480px){

        grid-column-gap: 0;
        grid-template-columns: repeat(1, 1fr);
    }
`

export const UserItem = styled.li`
    list-style: none;
    max-width: 204px;
    text-align: center;
    position: relative;

    align-items: center;
    justify-content: center;
`

export const UserWrapIcon = styled.div`
    height: 80px;
    width: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
`

export const UserIcon = styled.img`
    /* height: 102px;
    width: 102px; */

`
export const UserName = styled.div`
    margin-bottom: 5px;
    font-size: 24px;
    color: rgb(39, 42, 45);
    line-height: 1.2;
    white-space: pre-line;

`
export const UserJob = styled.div`
    /* margin-top: 21px; */
    font-size: 16px;
    color: rgb(77, 76, 76);
    line-height: 1.5;

`

export const MailSpan = styled.span`
    display: none;
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.8);
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.3);
    position: absolute;
    bottom: -18px;
    left: -20px;
    padding: 5px 10px;
    font-size: 14px;
    color: rgb(254, 254, 254);
    line-height: 1.2;
`

export const UserMail = styled.div`
    /* margin-top: 12px; */
    font-size: 16px;
    color: rgb(77, 76, 76);
    line-height: 1.5;
    cursor: pointer;

    &:hover + ${MailSpan} {
        display: inline-block;
    }
`


export const UserPhone = styled.div`
    /* margin-top: 12px; */
`

export const UsersBtnWrap = styled.div`
    margin-top: 35px;
    display: flex;
    justify-content: center;
`






