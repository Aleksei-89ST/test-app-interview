import { useSelector } from "react-redux";
import "./App.css";
import  LoginPage  from "./componenets/LoginPage/LoginPage";

function App() {
  // const state = useSelector(state => state.auth);

  return <div className="App">
    <h1>Вход</h1>
    <LoginPage/>
  </div>;
}

export default App;
