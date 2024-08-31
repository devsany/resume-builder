import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useReactToPrint } from "react-to-print";

const ViewThree = () => {
  const nav = useNavigate();

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "Print This Document",
    onBeforePrint: () => console.log("before printing..."),
    onAfterPrint: () => console.log("after printing..."),
    removeAfterPrint: true,
  });

  const storedSkills = JSON.parse(localStorage.getItem("user_resume_data"));

  console.log(storedSkills);
  const handleFillForm = () => {
    nav("/new_resume");
  };
  const handleBackToExplore = () => {
    nav("/explore_more_resume_builder");
  };
  // setData(storedSkills);
  return (
    <>
      {storedSkills && storedSkills ? (
        <div>
          <h2>View One</h2>
          <button className="button-42" onClick={handleBackToExplore}>
            Back
          </button>
          <button className="button-41" onClick={handlePrint}>
            Print
          </button>

          <div className="mainSinglePage">
            <div ref={componentRef}>
              <div className="main_resume_page">
                <div className="main_resume_page_inner">
                  <div className="main-resume_page_content">
                    <div className="main_three_content">
                      <div className="view_three_left">
                        <div>
                          <div className="header_view_three">
                            <div>
                              <div className="name1">
                                {storedSkills.name}{" "}
                                <div className="applyfor_three">
                                  {" "}
                                  - ({storedSkills.applyFor})
                                </div>{" "}
                              </div>

                              <div className="contact1">
                                {storedSkills.email}
                              </div>
                              <div>Mobile 1 no.: {storedSkills.phone[0]}</div>
                              <div>Mobile 2 no.: {storedSkills.phone[2]}</div>
                            </div>
                            <div>
                              <div
                                className="social_media_link_one"
                                style={{ color: "blue" }}
                              >
                                <a href={storedSkills.socialMedia}>Facebook</a>{" "}
                                |{" "}
                                <a href={storedSkills.socialMedia1}>Linkedin</a>{" "}
                                | <a href={storedSkills.socialMedia3}>Github</a>{" "}
                                |{" "}
                                <a href={storedSkills.socialMedia4}>
                                  Instagram
                                </a>
                              </div>
                            </div>
                          </div>

                          <div className="points">EDUCATION</div>
                          {/* <div className="education"> */}
                          <div>
                            <div>
                              {/* <div>
                              {storedSkills.education[0]} -{" "}
                              {storedSkills.passout[0]}
                            </div>
                            <div>
                              {storedSkills.education[1]} -{" "}
                              {storedSkills.passout[1]}
                            </div>

                            <div>
                              {storedSkills.education[2]} -{" "}
                              {storedSkills.passout[2]}
                            </div> */}
                              {storedSkills.education.map((item) => (
                                <div>
                                  <li
                                    style={{
                                      marginTop: "5px",
                                      marginBottom: "5px",
                                    }}
                                  >
                                    {item}
                                  </li>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div>
                            <span className="points">Pass-out Year</span>
                            <div>
                              {storedSkills.passout.map((item) => (
                                <div>
                                  {" "}
                                  <li
                                    style={{
                                      marginTop: "5px",
                                      marginBottom: "5px",
                                    }}
                                  >
                                    {item}
                                  </li>
                                </div>
                              ))}
                            </div>
                          </div>
                          {/* </div> */}
                          <div className="points">Tack-stack</div>

                          <div>
                            {storedSkills.techStack.map((item) => (
                              <span className="hobbies">
                                {" "}
                                <li
                                  style={{
                                    marginTop: "5px",
                                    marginBottom: "5px",
                                  }}
                                >
                                  {item}
                                </li>
                              </span>
                            ))}
                          </div>
                          {/* <div className="points">Hobbies</div>
                        <span>
                          {storedSkills.hobbie.map((item) => (
                            <span className="hobbies">{item}, </span>
                          ))}
                        </span> */}
                        </div>
                      </div>

                      <div>
                        <div className="points1">EXPERIENCE</div>
                        <div className="exp">
                          <div className="projectName1">
                            {storedSkills.projectName1}
                          </div>
                          <div className="projectDescription11">
                            <div className="projectDescription">
                              {storedSkills.projectDescription1}
                            </div>
                            <div>
                              <b>Tech-stack: </b>
                              {storedSkills.techStack1}
                            </div>
                          </div>
                          <div className="projectName1">
                            {storedSkills.projectName2}
                          </div>
                          <div className="projectDescription11">
                            <div className="projectDescription">
                              {storedSkills.projectDescription2}
                            </div>
                            <div>
                              {" "}
                              <b>Tech-stack: </b>
                              {storedSkills.techStack2}
                            </div>
                          </div>
                          <div className="projectName1">
                            {storedSkills.projectName3}
                          </div>
                          <div className="projectDescription11">
                            <div className="projectDescription">
                              {storedSkills.projectDescription3}
                            </div>
                            <div>
                              {" "}
                              <b>Tech-stack: </b>
                              {storedSkills.techStack3}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h2> Plz fill the resume form</h2>
          <button className="button-41" onClick={handleFillForm}>
            {" "}
            Fill Form
          </button>
        </div>
      )}
    </>
  );
};

export default React.memo(ViewThree);
