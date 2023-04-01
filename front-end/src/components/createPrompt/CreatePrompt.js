import "./createPrompt.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Dropzone from "../dropZone/DropZone";
// import Dropzone from "react-dropzone";

function CreatePrompt() {
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
          <div className="createForm">
      <Formik
        enableReinitialize={true}
        //   initialValues={searchBarFormData}
        //   validationSchema={vendorSchema}
      >
        <Form>
            {" "}
            <div className="createTitle">
              <h4 className="createTitle">Create New Prompt</h4>
            </div>
            <h5 className="form-control">
              Title :
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
            <h5 className="form-control">
              Comment :
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
        </Form>
      </Formik>
        <Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
          {({ getRootProps, getInputProps }) => (
            <section>
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop some files here, or click to select files</p>
              </div>
            </section>
          )}
        </Dropzone>
          </div>
    </div>
  );
}

export default CreatePrompt;
