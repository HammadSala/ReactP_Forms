import React  from "react";
import { useRef } from "react";
import styled from "styled-components";
import { Formik, Field, ErrorMessage, Form, FormikProps} from "formik";
import EmailField from "./EmailFeild";
import RatingField from "./RatingField";
import * as yup from "yup";

interface values {
    email : string;
    radioPicked: string;
    nname: string
}


const InvoiceForm = styled(Form)`
    display : flex;
    flex-direction: column;
    padding: 30px;
    border : 1px solid black;
`

const createInvoiceSchema = yup.object().shape(
    {
        email: yup.string().required("Email field cant be empty")
                           .email("Invalid email"),
        nname: yup.string().required("Name field cant be empty")
                            .test('len', 'very weak',  val => val.length > 5 )
                            .test('len', 'weak', val => val.length > 8)
                            
                            
    }
);

class CreateInvoiceComponent extends React.Component{
    fileValue: React.RefObject<HTMLInputElement> = React.createRef();
    constructor(props : any) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    
    handleSubmit = (values : values) =>{
        alert( this.fileValue.current?.value);
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
    

    render(){
        return(
            <>
                React Invoice
                <Formik initialValues={{ email: "", nname: "", radioPicked: ''}}
                        onSubmit={this.handleSubmit} 
                        validationSchema={createInvoiceSchema}>
                {(props: FormikProps<values>) =>(
                    <InvoiceForm>
                         <EmailField name="email" type="email" label="Clients Email" />
                         <EmailField name="nname" type="text" label="Client Name" />
                         <div>
                         
                            <Field type="radio" htmlFor="radioPicked" name="radioPicked" value="1" />1
                            
                            
                            <Field type="radio" htmlFor="radioPicked" name="radioPicked" value="2"/>2
                            
                            
                            <Field type="radio" htmlFor="radioPicked" name="radioPicked" value="3" />3
                            
                         </div>
                         <div>
                            <label htmlFor="fileValue">File upload</label>
                            <input type="file" name="fileValue" id="fileValue" ref={this.fileValue} />
                        </div>
                         <input type="submit" value="Submit" />
                    </InvoiceForm>
                )}
                </Formik>
            </>
        );
    }
}

export default CreateInvoiceComponent;