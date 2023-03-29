import React from "react";
import styled from "styled-components";
import { Formik, Field, Form, useField } from formik;

const Label = styled.label`
    font-size: 24px;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100%;
    align-items: center;    
`

const RatingContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex:1;
`

const ErrorMessage = styled.div`
    font-size: 24px;
    color: red;
`

const RatingField = ({label, ...props}) =>{
    const[ field, meta, helpers] = useField(props.name);

    const { value } = meta;
    const { setValue} = helpers;

    return (
        <Container>
            <Label htmlFor={props.id || props.name}> {label}

                
            </Label>
                <div name={props.name} >
                    <button onClick={()=>setValue(1)} isSelected={value === 1} > 1 </button>
                    <button onClick={()=>setValue(2)} isSelected={value === 2} > 2 </button>
                    <button onClick={()=>setValue(3)} isSelected={value === 3} > 3 </button>
                    <button onClick={()=>setValue(4)} isSelected={value === 4} > 4 </button>
                </div>
            {meta.touched && meta.error && ( <ErrorMessage>{meta.error}</ErrorMessage>)}
        </Container>
    );
};

export default RatingField;
