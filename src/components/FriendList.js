import React from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';
import './../styles/FriendList.css'
import { useState } from 'react';
// Here is an example of a form with an editable list.
// Next to each input are buttons for insert and remove.
// If the list is empty, there is a button to add an item.

export const FriendList = () => (

  <div>
    <h1>Adress</h1>
    <Formik
      initialValues={{ friends: [''] }}
      validate={values => {
        const errors = {};
        if (!values.friends) {
          errors.friends = 'Required';
        } {
          errors.friends = 'Adress Required';
        }
        return errors;
      }}
      onSubmit={values =>
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
        }, 500)
      }
      render={({ values , touched , errors }) => (
        <Form>
          <FieldArray
            name="friends"
            render={arrayHelpers => (
              <div className='adressmain'>
                {values.friends && values.friends.length > 0 ? (
                  values.friends.map((friend, index) => (
                    <div key={index} >
                      <div className='eachadresssection' >
                        <label className='adresssectionlabel'>Adress-{index+1}</label>
                      <Field required className="fieldadress" name={`friends.${index}`} />
                      {/* <input className='inputfriendlist' placeholder='Type your Adress'/> */}
                      <button
                        type="button"
                        onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                      >
                        Delete Adress
                      </button>
                      <br/>
                      </div>
                      <div className='errormessage'>
                      {errors.friends && touched.friends && errors.friends
                      }
                      </div>
                  
                    </div>
                  ))
                  
                ) : <></>}
                 <button
                        type="button"
                        onClick={() => arrayHelpers.push( '')} // insert an empty string at a position
                      >
                        Add a Adress
                      </button>
                <div>
                 
                </div>
              </div>
            )}
          />
        </Form>
      )}
    />
  </div>
);