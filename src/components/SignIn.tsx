import React from "react";
import styled from "styled-components";
import { Formik, Form, Field, ErrorMessage } from "formik";
import yup from "yup";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100%;
    align-items: center;
`
const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 600px;
    margin-top: 50px;
`

const Title = styled.h1`
    white-space: pre-line;
`

const SignInForm = styled(Form)`
    display : flex;
    flex-direction: column;
    padding: 30px;
    border : 1px solid black;
`

const Label = styled.label`
    text-align: left;
    margin-top: 20px;
    font-size: 24px;
`

const EmailField = styled(Field)`
    height: 40px;
    font-size: 24px;
`

const PasswordField = styled(Field)`
    height: 40px;
    font-size: 24px;
`
const CheckBoxContainer = styled.div`
    display: flex;
    height: 50 px;
    align-items: center;
`
const RememberCheckbocField = styled(Field)`
    height: 40px;
    font-size: 24px;
`

const CheckBoxLabel = styled(Field)`
    margin-top: 7px;
    margin-left: 10px;
`

const RememberMeLabel = styled(Field)`
    margin-top: 10px;
`

const SubmitButton = styled.button`
    height: 40px;
    width: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    broder: 2px solid #666666;
    border-radius: 4px;
    font-weight: 10px;
    cursor: pointer;
    margin-top: 40px;
`
const ErrorLabel = styled.div`
    font-size: 24px;
    color: red;
`
type v = {
    email : string,
    password: string,
    rememberMe: boolean

}
class SignIn extends React.Component{

    

    constructor(props : any) {
        super(props);

        
        this.handleValidate = this.handleValidate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    

    handleValidate(values : v){
        const errors = { 
            email: "",
            password: "" }

        if(!values.email){
            errors.email = " EMail cant be empty";
        }
        if(!values.password){
            errors.password = " Password cant be password"
        } else if ( values.password.length < 8) {
            errors.password = " Password has to be 8 legnth"
        }
        console.log(errors , typeof(errors))
        
        return errors;
    }

    handleSubmit = (values : v) =>{
        alert(JSON.stringify(values));
        console.log("Submitted", values);
        return new Promise ((resolve)=>{
            setTimeout(()=>{
                resolve(undefined);
                alert(JSON.stringify(values));
                console.log("Submited", values);
            },1);
        }

        );
    }

    validatePassword (password : string) {
        if(!password){
            return " Password cant be empty";
        }else if (password.length < 5 )
        {
            return " Very Weak";
        } else if ( password.length < 8) {
            return "Weak"
        }

        return undefined;
    }

    validateEmail ( email : string) {
        if(!email){
            return " EMail cant be empty";
        }
        return undefined;
    }

 
    render() {
        return (
            <Container>
                <ContentContainer>
                    <Title>Sign In</Title>
                    <Formik initialValues={{ email: '', password: '', rememberMe: false }}
                        onSubmit={this.handleSubmit}
                        >
                        {props => (
                            <SignInForm>
                                <Label>Email</Label>
                                <EmailField name="email" type="email" validate={this.validateEmail}></EmailField>
                                <ErrorMessage name="email">
                                    {error => <ErrorLabel>{error}</ErrorLabel>}
                                </ErrorMessage>

                                <Label>Password</Label>
                                <PasswordField name="password" type="password" validate={this.validatePassword}></PasswordField>
                                <ErrorMessage name="password">
                                    {error => <ErrorLabel>{error}</ErrorLabel>}
                                </ErrorMessage>

                                <Label>RememberMe</Label>
                                {/* <input type="checkbox" name="rememberMe"/> */}
                                {/* <CheckBoxContainer> */}
                                {/* <RememberMeLabel>Remember Me </RememberMeLabel> */}
                                    <RememberCheckbocField name="rememberMe" type="checkbox">
                                        {/* <RememberMeLabel>Remember Me </RememberMeLabel> */}
                                    </RememberCheckbocField>
                                {/* </CheckBoxContainer> */}

                                {/* <SubmitButton type="submit" disabled={props.isSubmitting}>Submit</SubmitButton> */}
                                <SubmitButton type="submit" disabled={props.isSubmitting}>
                                    Submit
                                </SubmitButton>

                            </SignInForm>
                        )}
                    </Formik>
                </ContentContainer>
            </Container>
        )
    }
}

export default SignIn;