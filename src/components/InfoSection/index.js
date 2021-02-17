import React from 'react';
import { InfoContainer, InfoWrapper,InfoWrap, InfoContent, InfoH1, InfoH2, InfoP, InfoBtn, InfoBtnWrap,ImgWrapper, Img } from './InfoElements';

const Header = () => {
    return (
        <>
           <InfoContainer>
                <InfoWrapper>
                    <InfoH1>Let's get acquainted</InfoH1>
                    <InfoWrap>
                        <ImgWrapper>
                            <Img src={require("../../images/man-laptop-v1.svg").default}/>
                        </ImgWrapper>
                        <InfoContent>
                            <InfoH2>I am cool frontend developer</InfoH2>
                            <InfoP>We will evaluate how clean your approach to writing CSS and Javascript code is. You can use any CSS and Javascript 3rd party libraries without any restriction.</InfoP>
                            <InfoP>If 3rd party css/javascript libraries are added to the project via bower/npm/yarn you will get bonus points. If you use any task runner (gulp/webpack) you will get bonus points as well. Slice service directory page P​SD mockup​ into HTML5/CSS3.</InfoP>

                            <InfoBtnWrap>
                                <InfoBtn to="/">Sing up now</InfoBtn>
                            </InfoBtnWrap>
                        </InfoContent>
                    </InfoWrap>
                    
                </InfoWrapper>   
            </InfoContainer> 
        </>
    )
}

export default Header;
