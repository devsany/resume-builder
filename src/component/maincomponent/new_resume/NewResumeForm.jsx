import React from "react";

import { Formik, Form, FastField, ErrorMessage } from "formik";

const initialState = {
  name: "",
  applyFor: "",
  email: "",
  phone: ["", ""],
};
const onSubmit = (values) => {
  console.log(values);
};
const validate = (values) => {
  const error = {};
  if (!values.name) {
    error.name = "Require";
  }
  if (!values.email) {
    error.email = "Require";
  }
  if (!values.applyFor) {
    error.applyFor = "require";
  }

  return error;
};
const NewResumeForm = () => {
  return (
    <div>
      <Formik
        validate={validate}
        initialValues={initialState}
        onSubmit={onSubmit}
      >
        {(props) => {
          return (
            <>
              <Form>
                <div className="all_input_field">
                  <div className="inputField">
                    <label htmlFor="name">User Name</label>
                    <FastField
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter your name"
                    />
                    <div className="error">
                      <ErrorMessage name="name" />
                    </div>
                  </div>
                  <div className="inputField">
                    <label htmlFor="email">User Email</label>
                    <FastField
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter your Email"
                    />
                    <div className="error">
                      <ErrorMessage name="email" />
                    </div>
                  </div>

                  <div className="inputField">
                    <label htmlFor="applyFor">Apply For</label>
                    <FastField
                      type="text"
                      id="applyFor"
                      name="applyFor"
                      placeholder="Position Apply For"
                    />
                    <div className="error">
                      <ErrorMessage name="applyFor" />
                    </div>
                  </div>
                  <div className="inputField">
                    <label htmlFor="primaryNumber">Phone Number(Primary)</label>
                    <FastField
                      type="number"
                      id="primaryNumber"
                      placeholder="Enter your primary Number"
                      name="phone[0]"
                    />
                    <div className="error">
                      <ErrorMessage name="primaryNumber" />
                    </div>
                  </div>
                  <div className="inputField">
                    <label htmlFor="secondaryNumber">
                      Phone Number(secondary)
                    </label>
                    <FastField
                      type="number"
                      id="secondaryNumber"
                      placeholder="Enter your secondary Number"
                      name="phone[1]"
                    />
                    <div className="error">
                      <ErrorMessage name="secondaryNumber" />
                    </div>
                  </div>
                </div>
                <button
                  className="button-41"
                  type="submit"
                  disabled={props.isSubmitting}
                >
                  Submit
                </button>

                <button className="button-42" type="reset">
                  Reset
                </button>
              </Form>
            </>
          );
        }}
      </Formik>
    </div>
  );
};

export default NewResumeForm;
