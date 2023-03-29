import React from "react";
import { Formik, Field, ErrorMessage , Form } from "formik";
import styled from "styled-components";
// import { yup } from "yup";
import * as yup from 'yup';
import EmailField from "./EmailFeild";


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

const EmailField1 = styled(Field)`
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
    password: string

}

const SignUpSchema = yup.object().shape(
    {email: yup.string().email("Invalid email")
                .required("Email cant be empty")
}
);

const PasswordSchema = yup.object().shape({
    password: yup.string().required("Password cant be empty")
                        .test('len', 'Very Weak', val => val.length > 5)
                        .test('len', 'weak', val => val.length > 8)
});

class SignUp extends React.Component{

    constructor(props :v){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.validatePassword = this.validatePassword.bind(this);
    }

    validatePassword (value : string) {
        var error = undefined;
        try{
            PasswordSchema.validateSync({password: value})
        } catch (validationError : any) {
            error = validationError.errors[0];
        }

        return error;
    }

    // validatePassword (password : string) {
    //     if(!password){
    //         return " Password cant be empty";
    //     }else if (password.length < 5 )
    //     {
    //         return " Very Weak";
    //     } else if ( password.length < 8) {
    //         return "Weak"
    //     }

    //     return undefined;
    // }
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

    render() {
        return (
            <Container>
                <ContentContainer>
                    <Title>Sign Up</Title>
                    <Formik initialValues={{ email: '', password: '', rememberMe: false }}
                        onSubmit={this.handleSubmit}
                        validationSchema={SignUpSchema}
                        >
                        {props => (
                            <SignInForm>
                                <Label>Email</Label>
                                <EmailField1 name="email" type="email" ></EmailField1>
                                <ErrorMessage name="email">
                                    {error => <ErrorLabel>{error}</ErrorLabel>}
                                </ErrorMessage>

                                
                                <Label>Password</Label>
                                <PasswordField name="password" type="password" validate={this.validatePassword}></PasswordField>
                                <ErrorMessage name="password">
                                    {error => <ErrorLabel>{error}</ErrorLabel>}
                                </ErrorMessage>

                                <Label>Confirm Password</Label>
                                <PasswordField name="confirmPassword" type="password" validate={this.validatePassword}></PasswordField>
                                <ErrorMessage name="confirmPassword">
                                    {error => <ErrorLabel>{error}</ErrorLabel>}
                                </ErrorMessage>
                                
                                <SubmitButton type="submit" disabled={props.isSubmitting}>
                                    Submit
                                </SubmitButton>

                            </SignInForm>
                        )}
                    </Formik>
                </ContentContainer>
            </Container>
        );
    }
}

export default SignUp;