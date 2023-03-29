import React from "react";
import {Formik , FormikProps, useField} from "formik";
import styled from "styled-components";


const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100%;
    align-items: center;
`
const InputField = styled.input`
`

const Label = styled.label`
    font-size: 24px;
`
const ErrorMessage = styled.div`
    font-size: 24px;
    color: red;
`



const EmailField = ({ label, ...props} : any ) =>{
    const  [field, meta] = useField(props);

    return (
      
        <Container>
            <Label htmlFor={props.id || props.name}>{label}</Label>

            <InputField {...field} {...props}/>
            {meta.touched}
            
            { meta.touched && meta.error && (
                <ErrorMessage>{meta.error}</ErrorMessage>
            )}

        </Container>
                
    );
};


export default EmailField;