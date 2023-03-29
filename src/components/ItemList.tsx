import React from "react";
import * as yup from "yup";
import {useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"


type FormInputs = {
    name: string;
    email: string;
  };

const FormSchema = yup.object().shape(
    {name: yup.string().required("NAme cant be empty"),
     email: yup.string().email().required("Email cant be empty")}
);

function MyForm() {
        const { register, handleSubmit, formState : { errors}} = useForm<FormInputs>( 
            {resolver : yupResolver(FormSchema)}
            );

            function onSubmit(data : any) {
                console.log(data);
            }

            return(
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="name">
                        <input type="text" {...register('name')} />
                        {errors.name && <span>{errors.name.message}</span>}
                    </label>
                    <label htmlFor="email">
                        <input type="email" {...register("email")} />
                        {errors.email && <span>{errors.email.message}</span>}
                    </label>

                    <button type="submit">Submit</button>
                </form>
            )
}


export default MyForm;