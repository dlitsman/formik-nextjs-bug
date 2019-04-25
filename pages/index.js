import React from 'react';
import {Formik, Field} from 'formik';

const CreateForm = () => {
  return (
    <Formik
      initialValues={{
        test: '13',
      }}
      onSubmit={() => {}}
      render={(props) => (
        <form onSubmit={props.handleSubmit}>
          <Field name="test" />
        </form>
      )}
    />
  );
}

export default CreateForm;
