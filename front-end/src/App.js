import "./App.css";
import TopNav from "./components/topNav/TopNav";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();

  console.log(user);
  console.log(getAccessTokenSilently());

  return (
    <div>
      <TopNav />
    </div>
  );
}

export default App;
