import React from 'react';
import { RegisterContainer, FileWrap, LabelPhoto, BtnWrapForm, InputUpload,RegisterWrapper, RadioButtons, LabelRadio, RadioItem, Radio, ButtonForm, Span,SpanError,  RegisterH1, RegisterH2, Form, LabelItem, Label, Input } from './RegisterElements';
import {useForm} from 'react-hook-form';


const Header = () => {
    const {register, handleSubmit, errors} = useForm();
    const onSubmit = data => console.log(data);

    return (
        <>
           <RegisterContainer>
                <RegisterWrapper>
                    <RegisterH1>Register to get a work</RegisterH1>
                    <RegisterH2>Attention! After successful registration and alert, update the list of users in the block from the top</RegisterH2>

                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <LabelItem>
                            <Label>Name</Label>
                            <Input style={{borderColor: errors.name ? '#db3445' : 'rgb(207, 211, 217)', outline: errors.name && '#db3445'}} ref={register({required: true})} name="name" type="text" placeholder="Your name"/>
                            {errors.name && <SpanError>Error</SpanError>}
                        </LabelItem>
                        <LabelItem>
                            <Label>Email</Label>
                            <Input style={{borderColor: errors.name ? '#db3445' : 'rgb(207, 211, 217)', outline: errors.name && '#db3445'}}  ref={register({required: true})} name="email" type="text" placeholder="Your email"/>
                            {errors.email && <SpanError>Error</SpanError>}

                        </LabelItem>
                        <LabelItem>
                            <Label>Phone number</Label>
                            <Input style={{borderColor: errors.name ? '#db3445' : 'rgb(207, 211, 217)', outline: errors.name && '#db3445'}}  ref={register({required: true})} name="phone" type="tel"  placeholder="+380 XX XXX XX XX"/>
                            {errors.phone && <SpanError>Error</SpanError>}
                            <Span>Enter a phone number in international format</Span>
                        </LabelItem>

                        <RadioButtons>
                            <Label>Select your position</Label>
                            <RadioItem style={{marginTop: '15px'}}>
                                <LabelRadio><Radio type="radio" name="job"/>Frontend developer</LabelRadio>
                            </RadioItem>
                            <RadioItem>
                                <LabelRadio><Radio type="radio" name="job"/>Backend developer</LabelRadio>
                            </RadioItem>
                            <RadioItem>
                                <LabelRadio><Radio type="radio" name="job"/>Designer</LabelRadio>
                            </RadioItem>
                            <RadioItem>
                                <LabelRadio><Radio type="radio" name="job"/>QA</LabelRadio>
                            </RadioItem>
                        </RadioButtons>

                        <LabelPhoto>Photo</LabelPhoto>
                        
                        <FileWrap className="input-group mb-3">
                            <InputUpload type="file" className="form-control" id="inputGroupFile02"/>
                            <label className="input-group-text" htmlFor="inputGroupFile02">Browse</label>
                        </FileWrap>

                        <BtnWrapForm>
                            <ButtonForm type="submit">Sign up now</ButtonForm>

                        </BtnWrapForm>
                    </Form>
                    
                </RegisterWrapper>   
            </RegisterContainer> 
        </>
    )
}

export default Header;
