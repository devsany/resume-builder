import React from "react";

import {
  Formik,
  Form,
  FastField,
  ErrorMessage,
  FieldArray,
  Field,
} from "formik";

const initialState = {
  name: "",
  applyFor: "",
  email: "",
  socialMedia: "",
  socialMedia1: "",
  // socialMedia2: "",
  socialMedia3: "",
  socialMedia4: "",
  phone: ["", ""],
  education: [""],
  passout: [""],
  hobbie: [""],
  techStack: [""],
  projectName1: "",
  projectDescription1: "",
  techStack1: "",
  projectName2: "",
  projectDescription2: "",
  techStack2: "",
  projectName3: "",
  projectDescription3: "",
  techStack3: "",
};
const onSubmit = (values) => {
  alert("thanku you for submition");
  // Convert object to JSON string and store it
  localStorage.setItem("user_resume_data", JSON.stringify(values));
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
  //   if (!values.education) {
  //     error.education = "require";
  //   }
  //   if (!values.phone) {
  //     error.phone = "require";
  //   }
  if (!values.socialMedia) {
    error.socialMedia = "require";
  }
  if (!values.socialMedia1) {
    error.socialMedia1 = "require";
  }
  // if (!values.socialMedia2) {
  //   error.socialMedia2 = "require";
  // }
  if (!values.socialMedia3) {
    error.socialMedia3 = "require";
  }
  if (!values.socialMedia4) {
    error.socialMedia4 = "require";
  }
  if (!values.projectName1) {
    error.projectName1 = "require";
  }
  if (!values.projectName2) {
    error.projectName2 = "require";
  }
  if (!values.projectName3) {
    error.projectName3 = "require";
  }
  if (!values.projectDescription1) {
    error.projectDescription1 = "require";
  }
  if (!values.projectDescription2) {
    error.projectDescription2 = "require";
  }
  if (!values.projectDescription3) {
    error.projectDescription3 = "require";
  }
  if (!values.techStack1) {
    error.techStack1 = "require";
  }
  if (!values.techStack2) {
    error.techStack2 = "require";
  }
  if (!values.techStack3) {
    error.techStack3 = "require";
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
          console.log(props);
          return (
            <>
              <Form>
                <div className="all_input_field">
                  <div className="inputField">
                    <label htmlFor="name">User Name</label>
                    <FastField
                      className="input"
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
                      className="input"
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
                      className="input"
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
                      className="input"
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
                      className="input"
                      type="number"
                      id="secondaryNumber"
                      placeholder="Enter your secondary Number"
                      name="phone[1]"
                    />
                    <div className="error">
                      <ErrorMessage name="secondaryNumber" />
                    </div>
                  </div>
                  <div className="inputField">
                    <label htmlFor="socialMedia">Enter Facebook Link</label>
                    <FastField
                      className="input"
                      type="text"
                      id="socialMedia"
                      placeholder="Enter social media link 1"
                      name="socialMedia"
                    />
                    <div className="error">
                      <ErrorMessage name="socialMedia" />
                    </div>
                  </div>
                  <div className="inputField">
                    <label htmlFor="socialMedia1">Enter Linkedin Link</label>
                    <FastField
                      className="input"
                      type="text"
                      id="socialMedia1"
                      placeholder="Enter social media link 2"
                      name="socialMedia1"
                    />
                    <div className="error">
                      <ErrorMessage name="socialMedia1" />
                    </div>
                  </div>
                  <div className="inputField">
                    <label htmlFor="socialMedia3">Enter github Link</label>
                    <FastField
                      className="input"
                      type="text"
                      id="socialMedia3"
                      placeholder="Enter Github link"
                      name="socialMedia3"
                    />
                    <div className="error">
                      <ErrorMessage name="socialMedia3" />
                    </div>
                  </div>
                  <div className="inputField">
                    <label htmlFor="socialMedia4">Enter instagram Link</label>
                    <FastField
                      className="input"
                      type="text"
                      id="socialMedia4"
                      placeholder="Enter instagram link"
                      name="socialMedia4"
                    />
                    <div className="error">
                      <ErrorMessage name="socialMedia4" />
                    </div>
                  </div>

                  <div className="inputField">
                    <label htmlFor="projectName1">
                      Enter your project Name 1
                    </label>
                    <FastField
                      className="input"
                      type="text"
                      id="projectName1"
                      placeholder="Enter your First Project Name"
                      name="projectName1"
                    />
                    <div className="error">
                      <ErrorMessage name="projectName1" />
                    </div>
                  </div>
                  <div className="inputField">
                    <label htmlFor="projectDescription1">
                      Enter your 1st project Description
                    </label>
                    <FastField
                      className="input"
                      type="text"
                      id="projectDescription1"
                      placeholder="Project Description One"
                      name="projectDescription1"
                    />
                    <div className="error">
                      <ErrorMessage name="projectDescription1" />
                    </div>
                  </div>
                  <div className="inputField">
                    <label htmlFor="techStack1">
                      Enter your 1st project tech stack
                    </label>
                    <FastField
                      className="input"
                      type="text"
                      id="techStack1"
                      placeholder="Project Tech stack 1"
                      name="techStack1"
                    />
                    <div className="error">
                      <ErrorMessage name="techStack1" />
                    </div>
                  </div>
                  {/* second project  */}
                  <div className="inputField">
                    <label htmlFor="projectName2">
                      Enter your project Name 2
                    </label>
                    <FastField
                      className="input"
                      type="text"
                      id="projectName2"
                      placeholder="Enter your Second Project Name"
                      name="projectName2"
                    />
                    <div className="error">
                      <ErrorMessage name="projectName2" />
                    </div>
                  </div>
                  <div className="inputField">
                    <label htmlFor="projectDescription2">
                      Enter your 2st project Description
                    </label>
                    <FastField
                      className="input"
                      type="text"
                      id="projectDescription2"
                      placeholder="Project Description Two"
                      name="projectDescription2"
                    />
                    <div className="error">
                      <ErrorMessage name="projectDescription2" />
                    </div>
                  </div>
                  <div className="inputField">
                    <label htmlFor="techStack2">
                      Enter your 2st project tech stack
                    </label>
                    <FastField
                      className="input"
                      type="text"
                      id="techStack2"
                      placeholder="Project Tech stack 2"
                      name="techStack2"
                    />
                    <div className="error">
                      <ErrorMessage name="techStack2" />
                    </div>
                  </div>
                  {/* second project end */}
                  {/* third project start */}
                  <div className="inputField">
                    <label htmlFor="projectName3">
                      Enter your project Name 3
                    </label>
                    <FastField
                      className="input"
                      type="text"
                      id="projectName3"
                      placeholder="Enter your Third Project Name"
                      name="projectName3"
                    />
                    <div className="error">
                      <ErrorMessage name="projectName3" />
                    </div>
                  </div>
                  <div className="inputField">
                    <label htmlFor="projectDescription3">
                      Enter your 3st project Description
                    </label>
                    <FastField
                      className="input"
                      type="text"
                      id="projectDescription3"
                      placeholder="Project Description Three"
                      name="projectDescription3"
                    />
                    <div className="error">
                      <ErrorMessage name="projectDescription3" />
                    </div>
                  </div>
                  <div className="inputField">
                    <label htmlFor="techStack3">
                      Enter your 3st project tech stack
                    </label>
                    <FastField
                      className="input"
                      type="text"
                      id="techStack3"
                      placeholder="Project Tech stack 3"
                      name="techStack3"
                    />
                    <div className="error">
                      <ErrorMessage name="techStack3" />
                    </div>
                  </div>
                  {/* third project end */}
                  {/* education to tech stack start spacial case */}
                  <div className="inputField1">
                    <label htmlFor="education">Education</label>
                    <FieldArray className="input1" name="education">
                      {(fieldArrayProps) => {
                        const { push, remove, form } = fieldArrayProps;
                        const { values } = form;
                        const { education } = values;
                        return (
                          <div>
                            {education.map((education, index) => (
                              <div key={index}>
                                <Field
                                  className="input1"
                                  type="text"
                                  placeholder="Enter your Education"
                                  name={`education[${index}]`}
                                />
                                {index > 0 && (
                                  <button
                                    className="minus"
                                    type="button"
                                    onClick={() => remove(index)}
                                  >
                                    -
                                  </button>
                                )}
                                <button
                                  className="plus"
                                  type="button"
                                  onClick={() => push("")}
                                >
                                  +
                                </button>
                              </div>
                            ))}
                          </div>
                        );
                      }}
                    </FieldArray>
                    <div className="error">
                      <ErrorMessage name="education" />
                    </div>
                  </div>
                  <div className="inputField1">
                    <label htmlFor="education">
                      Note:Not increase Year of Education
                    </label>
                    <FieldArray className="input1" name="passout">
                      {(fieldArrayProps) => {
                        const { push, remove, form } = fieldArrayProps;
                        const { values } = form;
                        const { passout } = values;
                        return (
                          <div>
                            {passout.map((passout, index) => (
                              <div key={index}>
                                <Field
                                  className="input1"
                                  type="number"
                                  placeholder="Enter your Educational Year"
                                  name={`passout[${index}]`}
                                />
                                {index > 0 && (
                                  <button
                                    className="minus"
                                    type="button"
                                    onClick={() => remove(index)}
                                  >
                                    -
                                  </button>
                                )}
                                <button
                                  className="plus"
                                  type="button"
                                  onClick={() => push("")}
                                >
                                  +
                                </button>
                              </div>
                            ))}
                          </div>
                        );
                      }}
                    </FieldArray>
                    <div className="error">
                      <ErrorMessage name="education" />
                    </div>
                  </div>
                  <div className="inputField1">
                    <label htmlFor="hobbies">Hobbies</label>
                    <FieldArray className="input1" name="hobbie">
                      {(fieldArrayProps) => {
                        const { push, remove, form } = fieldArrayProps;
                        const { values } = form;
                        const { hobbie } = values;
                        return (
                          <div>
                            {hobbie.map((passout, index) => (
                              <div key={index}>
                                <Field
                                  className="input1"
                                  type="text"
                                  placeholder="Enter your Educational Year"
                                  name={`hobbie[${index}]`}
                                />
                                {index > 0 && (
                                  <button
                                    className="minus"
                                    type="button"
                                    onClick={() => remove(index)}
                                  >
                                    -
                                  </button>
                                )}
                                <button
                                  className="plus"
                                  type="button"
                                  onClick={() => push("")}
                                >
                                  +
                                </button>
                              </div>
                            ))}
                          </div>
                        );
                      }}
                    </FieldArray>
                    <div className="error">
                      <ErrorMessage name="education" />
                    </div>
                  </div>
                  <div className="inputField1">
                    <label htmlFor="techStack">Tech Stack</label>
                    <FieldArray className="input1" name="techStack">
                      {(fieldArrayProps) => {
                        const { push, remove, form } = fieldArrayProps;
                        const { values } = form;
                        const { techStack } = values;
                        return (
                          <div>
                            {techStack.map((passout, index) => (
                              <div key={index}>
                                <Field
                                  className="input1"
                                  type="text"
                                  placeholder="Enter your Tech stack"
                                  name={`techStack[${index}]`}
                                />
                                {index > 0 && (
                                  <button
                                    className="minus"
                                    type="button"
                                    onClick={() => remove(index)}
                                  >
                                    -
                                  </button>
                                )}
                                <button
                                  className="plus"
                                  type="button"
                                  onClick={() => push("")}
                                >
                                  +
                                </button>
                              </div>
                            ))}
                          </div>
                        );
                      }}
                    </FieldArray>
                    <div className="error">
                      <ErrorMessage name="education" />
                    </div>
                  </div>
                  {/* education to tech stack end special case */}
                  <div>
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
                  </div>
                </div>
              </Form>
            </>
          );
        }}
      </Formik>
    </div>
  );
};

export default React.memo(NewResumeForm);
