import React, {useState} from "react";
import { useAuth0 } from "@auth0/auth0-react";


const LoginButton = (props) => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  const [userInfo, setUserInfo] = useState("user email"
  );

const handleInputChange = (event) => {
  console.log("handle input triggered", event);
  const newValue = event.target.value;
  console.log("newValue", newValue)
  setUserInfo(newValue);
  props.onStateChange(newValue); // invoke callback function from the child component
};

  const handleLogin = async () => {
    console.log("login clicked");


    //method 1 requires axios
    try {
      const authResult = await loginWithRedirect();
      console.log("login successful");
      const { email } = authResult.idTokenPayload;
      setUserInfo(email);
    } catch (error) {
      console.log("log in unsuccessful");
      console.log("An error occurred during login:", error);
    }
  };
  return (
    !isAuthenticated && (
      <button 
      className="btn btnLI h" 
      // onClick={() => loginWithRedirect({})} //original login
      // onClick={handleLogin, handleInputChange}
      onClick={() => {
        handleLogin();
        handleInputChange();
      }}
      // onChange={handleInputChange}
      >Log In</button>

    )
  );
};

export default LoginButton;