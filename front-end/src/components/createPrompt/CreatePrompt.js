import "./createPrompt.css"
import { Formik, Form, Field, ErrorMessage } from "formik";

function CreatePrompt(){

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

    return (
        <div className="createPromptMain">
            <Formik
          enableReinitialize={true}
        //   initialValues={searchBarFormData}
        //   validationSchema={vendorSchema}
        >
          <Form> 
            <div className="createForm"> <div className="createTitle">
            <h4 className="createTitle">Create New Prompt</h4>

            </div>
                <h5 className="form-control">Title :  
              <Field
                type="text"
                name="enter text here"
                onChange={onFormFieldChange}
              />
                </h5>
              <ErrorMessage
                name="description"
                component="div"
                className="has-error"
              />
                <h5 className="form-control">Comment :  
              <Field
                type="text"
                name="enter text here"
                onChange={onFormFieldChange}
              />
                </h5>
              <ErrorMessage
                name="description"
                component="div"
                className="has-error"
              />
            </div>
          </Form>
        </Formik>
        </div>
    );
};

export default CreatePrompt;