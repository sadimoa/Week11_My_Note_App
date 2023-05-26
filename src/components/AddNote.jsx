import React from 'react';

// Import Formik and Yup
import {Formik, Form,Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'


const AddNote = (props) => {
 
  // add form logic here

  const initialValues = {
    title: "",
    content: ""
  }

  const validationScheme = Yup.object({
    title: Yup.string().required('title is required'),
    content: Yup.string().required('required')
  })




  const handleSubmit = (values) => {
   props.createNote({
    title: values.title,
    content: values.content
   })
  }


  return (
    <div className="flex flex-col justify-center items-center w-full">
      { /* Add here your form and style it with Tailwind */ }
      <div className='w-5/12 bg-white p-10 rounded shadow'>
        <Formik
        initialValues={initialValues}
        validationSchema={validationScheme}
        onSubmit={handleSubmit}
        >

          <Form className="flex flex-col space-y-3">
            <Field 
            type="text" 
            name="title" 
            placeholder="Title"
          className="border border-gray-500 rounded p-2 w-screen-full"
          />
          <ErrorMessage component="div" name='title' className='text-red-500'/>
            <Field 
            as='textarea' 
            name="content" 
            placeholder="Content"
          className="border border-gray-500 rounded p-2 w-screen-full"
          />
          <ErrorMessage name="content" component="div" className='text-red-500'/>

            <button
            className="bg-yellow-400 py-2 rounded" type='submit' onSubmit={handleSubmit}>
              Add Note
             </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default AddNote;
