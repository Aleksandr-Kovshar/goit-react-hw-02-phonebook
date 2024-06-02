import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styled from "styled-components";
import { object, string, number, date, InferType, boolean } from "yup";
import {
  FormTemplate,
  Input,
  Button,
} from "./FormAdd.styled";



const validationSchema = object({
  name: string().required(),
  number: number().required(),
});


const initialValues = {
  name: "",
  number: "",
};

const FormAdd = () => {
    return (
     
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
        >
          <FormTemplate autoComplete="off">
            <Input
              type="text"
              name="name"
              placeholder="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            ></Input>
            <Input
              type="tel"
              name="number"
              placeholder="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            ></Input>
            <Button type="Submit">Add contact</Button>
          </FormTemplate>
        </Formik>
        
      
    );}

export default FormAdd;