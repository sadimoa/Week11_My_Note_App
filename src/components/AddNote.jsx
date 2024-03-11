import React from "react";
import { Formik, Form, Field, ErrorMessage, useFormikContext } from "formik";
import * as Yup from "yup";

const AddNote = (props) => {
  const initialValues = {
    title: "",
    content: "",
  };

  const validationScheme = Yup.object({
    title: Yup.string().required("Title is required"),
    content: Yup.string().required("Content is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    props.createNote({
      title: values.title,
      content: values.content,
    });
    resetForm();
  };

  return (
    <div className="w-[520px] p-12 py-8 mb-10 rounded bg-white h-auto ">
      <Formik
        initialValues={initialValues}
        validationSchema={validationScheme}
        onSubmit={handleSubmit}
      >
        <Form className="flex flex-col space-y-5">
          <Field
            className="border p-1.5 rounded"
            type="text"
            name="title"
            placeholder="Title"
          />
          <ErrorMessage component="div" name="title" className="text-red-300" />

          <Field
            className="border p-1.5 rounded"
            type="text"
            name="content"
            placeholder="Content"
          />
          <ErrorMessage component="div" name="content" className="text-red-300" />
          <button className="px-12 py-2 rounded bg-yellow-500" type="submit">
            Add Note
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default AddNote;
