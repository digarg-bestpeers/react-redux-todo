import React from "react"
import './App.css';
import NameContainer from "./components/NameContainer"
import { Provider } from "react-redux"
import Store from "./redux/Store"

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <NameContainer />
      </div>
    </Provider>
  );
}

export default App;
