import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./topNav.css";
import AllPrompts from "../allPrompts/AllPrompts";
import MyPrompts from "../myPrompts/MyPrompts";
import CreatePrompt from "../createPrompt/CreatePrompt";
import Welcome from "../welcome/Welcome";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../auth0/LoginButton";
import Logoutbutton from "../auth0/LogoutButton";

function TopNav() {
  const [main, setMain] = useState({
    center: <Welcome />,
  });
  
  // const { user, isAuthenticated, isLoading } = useAuth0();

  // if (isLoading) {
  //   return <div>Loading ...</div>;
  // }

  const onFormFieldChange = (event) => {
    const target = event.target;
    const newUserValue = target.value;
    const nameOfField = target.name;
    console.log({ nameOfField });
    // setVendorFormData((prevState) => {
    //   console.log("updater onChange");
    //   const newUserObject = {
    //     ...prevState,
    //   };
    //   newUserObject[nameOfField] = newUserValue;
    //   return newUserObject;
    // });
    console.log("end onChange");
  };
  //#region  buttons

  const allPromptsClicked = async (e) => {
    e.preventDefault();
    console.log("all prompts clicked");
    setMain((prevState) => ({
      ...prevState,
      center: <AllPrompts />,
    }));
  };

  const myPromptsClicked = (e) => {
    e.preventDefault();
    console.log("my prompts clicked");
    setMain((prevState) => ({
      ...prevState,
      center: <MyPrompts />,
    }));
  };

  const createPromptClicked = (e) => {
    console.log("create prompt clicked");
    e.preventDefault();
    setMain((prevState) => ({
      ...prevState,
      center: <CreatePrompt />,
    }));
  };

  const aboutClicked = (e) => {
    console.log("about clicked");
    e.preventDefault();
  };

  const signUpClicked = (e) => {
    console.log("sign up clicked");
    e.preventDefault();
  };

  const logInClicked = (e) => {
    console.log("log in clicked");
    e.preventDefault();
  };
  //#endregion

  return (
    <div>
      <div className="topNav">
        <div className="logo"></div>
        <button className="btn btnAP h" onClick={allPromptsClicked}>
          All Prompts
        </button>
        <button className="btn btnMP h" onClick={myPromptsClicked}>
          My Prompts
        </button>
        <button className="btn btnCP h" onClick={createPromptClicked}>
          Create Prompt
        </button>
        <button className="btn btnA h" onClick={aboutClicked}>
          About
        </button>
        <Formik
          enableReinitialize={true}
          //   initialValues={searchBarFormData}
          //   validationSchema={vendorSchema}
        >
          <Form>
            <div className="searchBar btn">
              <h4 className="form-control">
                Search :
                <Field
                  type="text"
                  name="enter text here"
                  onChange={onFormFieldChange}
                />
              </h4>
              <ErrorMessage
                name="description"
                component="div"
                className="has-error"
              />
            </div>
          </Form>
        </Formik>
        <button className="btn btnSU h" onClick={signUpClicked}>
          Sign up
        </button>
        <div className="btn btnLI h" 
        // onClick={logInClicked}
        >
        <LoginButton />
          Log in
        </div>
      </div>
      {main.center}
    </div>
  );
}

export default TopNav;
