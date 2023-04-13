import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="dev-ezr2jpqdbryydw6b.us.auth0.com"
    clientId="eMOOQBCyMCJetoVIKMYGdimT3mGs0Uvd"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    {/* <App /> */}
  </Auth0Provider>,
  document.getElementById("root")
);