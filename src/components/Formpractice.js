import React from 'react';
import { Formik, Field, ErrorMessage, Form } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
 name: Yup.string().required('Name is required'),
 email: Yup.string().email('Invalid email address').required('Email is required'),
});

function MyForm() {
 return (
 <div>
 <h1>Formik Form with Error Messages</h1>
 <Formik
 initialValues={{ name: '', email: '' }}
 validationSchema={validationSchema}
 onSubmit={(values, actions) => {
 // Handle form submission
 console.log('Form submitted:', values);
 actions.setSubmitting(false);
 }}
 >
 <Form>
 <div>
 <label htmlFor="name">Name</label>
 <Field type="text" id="name" name="name" />
 <ErrorMessage name="name" component="div" className="error" />
 </div>

 <div>
 <label htmlFor="email">Email</label>
 <Field type="text" id="email" name="email" />
 <ErrorMessage name="email" component="div" className="error" />
 </div>

 <button type="submit">Submit</button>
 </Form>
 </Formik>
 </div>
 );
}

export default MyForm;