import React from "react";
import styles from "./App.css";
import { TodoWrapperLocalStorage } from "./components/TodoWrapperLocalStorage";
const App = () => {
  return (
    <div className="App">
      <TodoWrapperLocalStorage />
    </div>

  )
}

export default App;
