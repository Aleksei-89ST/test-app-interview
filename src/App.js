import { useSelector } from "react-redux";
import "./App.css";

function App() {
  const state = useSelector(state => state.auth);
  console.log(state)
  return <div className="App">
    <h1>TEXT</h1>
  </div>;
}

export default App;
