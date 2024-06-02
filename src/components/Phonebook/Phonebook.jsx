import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styled from "styled-components";
import { object, string, number, date, InferType, boolean } from "yup";
import FormAdd from "./FormAdd";
import Contact from "./Contact";
import ContactList from "./ContactList";

class Phonebook extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
    name: "",
    number: "",
  };

  render() {
    return (
      <>
        <FormAdd></FormAdd>
        <ContactList contacts={this.state.contacts} />
      </>
    );
  }
}

// const ErrorText = styled.p`
//   color: red;
// `;

// const FormError = ({ name }) => {
//   return (
//     <ErrorMessage
//       name={name}
//       render={(message) => <ErrorText>{message}</ErrorText>}
//     />
//   );
// };

// const initialValues = {
//   product: "",
//   name: "",
//   email: "",
//   title: "",
//   review: "",
//   rating: "",
//   date: new Date(),
//   wouldRecommend: false,
// };

// export class Phonebook extends Component {
//   handleSubmit = (values, { resetForm }) => {
//     console.log(values);
//     resetForm();
//   };

//   render() {
//     return (
//       <Formik
//         initialValues={initialValues}
//         validationSchema={validationSchema}
//         onSubmit={this.handleSubmit}
//       >
//         <Form autoComplete="off">
//           <div>
//             <label htmlFor="name">Full name</label>
//             <div>
//               <Field name="name" type="text" placeholder="Full name" />
//               <FormError name="name" />
//             </div>
//           </div>
//           <div>
//             <label htmlFor="email">Email address</label>
//             <div>
//               <Field name="email" type="email" placeholder="Email address" />
//               <FormError name="email" />
//             </div>
//           </div>
//           <div>
//             <label htmlFor="product">Product</label>
//             <div>
//               <Field name="product" as="select">
//                 <option value="">Select a product</option>
//                 {products.map((product, idx) => (
//                   <option value={product} key={idx}>
//                     {product}
//                   </option>
//                 ))}
//               </Field>
//               <FormError name="product" />
//             </div>
//           </div>
//           <div>
//             <label htmlFor="title">Title</label>
//             <div>
//               <Field name="title" type="text" placeholder="Title" />
//               <FormError name="title" />
//             </div>
//           </div>
//           <div>
//             <label htmlFor="review">Review</label>
//             <div>
//               <Field name="review" as="textarea" placeholder="Review" />
//               <FormError name="review" />
//             </div>
//           </div>
//           <div>
//             <label htmlFor="rating">Rating</label>
//             <div>
//               <Field name="rating" type="number" placeholder="Rating" />
//               <FormError name="rating" />
//             </div>
//           </div>
//           <div>
//             <div>
//               <label htmlFor="wouldRecommend">
//                 <Field
//                   name="wouldRecommend"
//                   type="checkbox"
//                   placeholder="Full name"
//                 />
//                 WouldRecommend
//               </label>
//             </div>
//           </div>
//           <button type="submit">Submit</button>
//         </Form>
//       </Formik>
//     );
//   }
// }

export default Phonebook;
