import "./App.css";
import TopNav from "./components/topNav/TopNav";
import { Auth0Provider } from "@auth0/auth0-react";

function App() {
  return (
    <Auth0Provider>
    <div>

      <TopNav />
    </div>
    </Auth0Provider>
  );
}

export default App;
