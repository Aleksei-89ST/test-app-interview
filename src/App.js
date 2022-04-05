import { useSelector } from "react-redux";
import LoginPage from "./componenets/LoginPage/LoginPage";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import { ProfilePage } from "./componenets/ProfilePage/ProfilePage";

function App() {
   const state = useSelector(state => state.auth);

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/profile">
            <ProfilePage login={state.login}/>
          </Route>
          <Route path="/">
            <h1>Вход</h1>
            <LoginPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
