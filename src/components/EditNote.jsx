import { useEffect } from "react";

// Import Formik and Yup
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useParams } from "react-router-dom";



const EditNote = (props) => {
  // add form logic here

  const params = useParams()

  const currentValues = () => {
      console.log(props.notes === Number(params.id))
  }


  const initialValues = {
    title: "kfd",
    content: "jdfj",
  };

  const validationScheme = Yup.object({
    title: Yup.string().required("title is required"),
    content: Yup.string().required("required"),
  });

  const handleSubmit = (values) => {
    props.EditNote({
      title: values.title,
      content: values.content,
    });
  };

  return (
    <div className="w-[520px] p-12 py-8 mb-10 rounded bg-white h-auto ">
      <Formik 
      initialValues={initialValues} 
      validationSchema={validationScheme}
      onSubmit={handleSubmit}>
        <Form className="flex flex-col space-y-5">
          <Field
            className="border p-1.5 rounded"
            type="text"
            name="title"
            placeholder="Title"
          />
          <ErrorMessage component="div" name='title' className='text-red-300'/>

          <Field
            className="border p-1.5 rounded"
            type="text"
            name="content"
            placeholder="content"
          />
          <ErrorMessage component="div" name='content' className='text-red-300'/>
          <button className="px-12 py-2 rounded bg-yellow-500" type="submit">
            Edit Note
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default EditNote;
