import React from 'react';
import { HeaderContainer, HeaderWrapper, HeaderContent, HeaderH1, HeaderP, HeaderBtnWrap } from './HeaderElements';
import {Button} from '../ButtonElements';

const Header = () => {
    return (
        <>
           <HeaderContainer id="about me">
                <HeaderWrapper>
                    <HeaderContent>
                        <HeaderH1>TEST ASSIGNMENT {'\n'} FOR FRONTEND {'\n'} DEVELOPER POSITION</HeaderH1>
                        <HeaderP>We kindly remind you that your test assignment should be submitted as a link to github/bitbucket repository. <span>Please be patient, we consider and respond to every application that meets minimum requirements. We look forward to your submission. Good luck! The photo has to scale in the banner area on the different screens</span></HeaderP>
                        <HeaderBtnWrap>
                            <Button to="signup">Sing up now</Button>
                        </HeaderBtnWrap>
                    </HeaderContent>
                </HeaderWrapper>   
            </HeaderContainer> 
        </>
    )
}

export default Header;
