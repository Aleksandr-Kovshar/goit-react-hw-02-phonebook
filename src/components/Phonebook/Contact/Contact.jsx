import React, { Component } from "react";
import { ContainerContact, ContactStyle, ButtonDelete } from "./Contact.styled";


const Contact = ({ namecontact, numbercontact }) => {
    return (
      <ContainerContact>
        <ContactStyle>
          {namecontact}: {numbercontact}
        </ContactStyle>
        <ButtonDelete>delete</ButtonDelete>
      </ContainerContact>
    );
}







export default Contact;