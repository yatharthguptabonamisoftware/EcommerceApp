import React from 'react';
import { Formik, Field, FieldArray, ErrorMessage, Form } from 'formik';
import * as Yup from 'yup';
import './../styles/AdressForm.css'
import Adress from './Adress';
import { useState } from 'react';

const AddressSchema = Yup.object().shape({
  addresses: Yup.array().of(
    Yup.object().shape({
      streetAddress: Yup.string().required('Street Address is required'),
      country: Yup.string().required('Country is required'),
      city: Yup.string().required('City is required'),
      pincode: Yup.string().required('Pincode is required'),
    })
  ),
});


const AddressForm = ({ setFieldTouched }) => {
  const [issubmit, setissubmit] = useState(false);
  return (
    <div>
      <h1 className='adressheading'>Address Form</h1>
      <Formik
        initialValues={{ addresses: [{}] }}
        validationSchema={AddressSchema}
        onSubmit={(values, actions) => {
          // validate(values);
          // Formik.validate(values)
          // Formik.validateForm();
          actions.setSubmitting(false);

          console.log("jglkhj", values);

        }}
      >
        {({ values, errors, }) => (

          <Form>
            {console.log('error', errors)}
            <FieldArray
              name="addresses"
              render={arrayHelpers => (
                <div>
                  {values.addresses.map((address, index, setFieldTouched) => (

                    <div key={index} className='adresssection'>
                      <h1>Adress-{index + 1}</h1>
                      <Field
                        className='streetadress'
                        type="text"
                        name={`addresses.${index}.streetAddress`}
                        placeholder="Enter Street Address*"
                      />
                      <ErrorMessage
                        name={`addresses.${index}.streetAddress`}
                        component="div"
                        className="error"
                      />
                      <div className='error'>
                        {issubmit && 'addresses' in errors && errors.addresses[0].streetAddress}

                      </div>
                      <div className='adresssection2'>
                        <div className='countrysection'>
                          <Field
                            className='country'
                            type="text"
                            name={`addresses.${index}.country`}
                            placeholder="Enter Country*"
                          />
                          <ErrorMessage
                            name={`addresses.${index}.country`}
                            component="div"
                            className="error"
                          />
                          <div className='error'>
                            {issubmit && 'addresses' in errors && errors.addresses[0].country}
                          </div>
                        </div>
                        <div className='citysection'>
                          <Field
                            className='city'
                            type="text"
                            name={`addresses.${index}.city`}
                            placeholder="Enter City*"
                          />

                          <ErrorMessage
                            name={`addresses.${index}.city`}
                            component="div"
                            className="error"
                          />
                          <div className='error'>
                            {issubmit && 'addresses' in errors && errors.addresses[0].city}
                          </div>
                        </div>
                      </div>
                      <div className='pincodearea'>
                        <div className='pincodesection'>
                          <Field
                            className='pincode'
                            type="text"
                            name={`addresses.${index}.pincode`}
                            placeholder="Enter Pincode*"
                          />
                          <ErrorMessage
                            name={`addresses.${index}.pincode`}
                            component="div"
                            className="error"
                          />
                          <div className='error'>
                            {issubmit && 'addresses' in errors && errors.addresses[0].pincode}
                          </div>
                        </div>
                        <button
                          className={index > 0 ? 'nobutton' : 'addbutton'}
                          type="button"
                          onClick={() => arrayHelpers.remove(index)}
                        >
                          - Remove Address{index}
                        </button>
                      </div>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => arrayHelpers.push({})}
                  >
                    + Add Address
                  </button>
                </div>
              )}
            />
            <button type="submit" onClick={() => (setissubmit(true))}>Save Values</button>

          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddressForm;
