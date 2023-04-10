import React, {useState} from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./topNav.css";
import AllPrompts from "../allPrompts/AllPrompts"
import MyPrompts from "../myPrompts/MyPrompts"
import CreatePrompt from "../createPrompt/CreatePrompt"
import Welcome from "../welcome/Welcome"

function TopNav() {
      const [main, setMain] = useState({
        center: <Welcome />
      })

//#region  buttons
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

      const allPromptsClicked = async (e) => {
        e.preventDefault();
        console.log("all prompts clicked")
        setMain((prevState) => ({
          ...prevState,
          center: <AllPrompts />
        }));
      };

      const myPromptsClicked = (e) => {
        e.preventDefault();
        console.log("my prompts clicked")
        setMain((prevState) => ({
          ...prevState,
          center: <MyPrompts />
        }));
      };

      const createPromptClicked = (e) => {
        console.log("create prompt clicked")
        e.preventDefault();
        setMain((prevState) => ({
          ...prevState,
          center: <CreatePrompt />
        }))
      };

      const aboutClicked = (e) => {
        console.log("about clicked")
        e.preventDefault();
      };
      
      const signUpClicked = (e) => {
        console.log("sign up clicked")
        e.preventDefault();
      }

      const logInClicked = (e) => {
        console.log("log in clicked")
        e.preventDefault();
      }
//#endregion
  
return (
    <div>
      <div className="topNav">
        <div className="logo"></div>
        <button className="btn btnAP h" onClick={allPromptsClicked}>All Prompts</button>
        <button className="btn btnMP h" onClick={myPromptsClicked}>My Prompts</button>
        <button className="btn btnCP h" onClick={createPromptClicked}>Create Prompt</button>
        <button className="btn btnA h" onClick={aboutClicked}>About</button>
        <Formik
          enableReinitialize={true}
        //   initialValues={searchBarFormData}
        //   validationSchema={vendorSchema}
        >
          <Form>
            <div className="searchBar btn">
                <h4 className="form-control">Search :  
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
        <button className="btn btnSU h" onClick={signUpClicked}>Sign up</button>
        <button className="btn btnLI h" onClick={logInClicked}>Log in</button>
      </div>
      {main.center}
    </div>
  );
}

export default TopNav;
