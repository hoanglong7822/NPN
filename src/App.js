// import HomePage from "./page/HomePage";
import Form from "./page/PassWord/Form";
import "./App.css";
import Text from "./page/Text/Text";
import { useState } from "react";
const App = () => {
  const [state, setState] = useState(true);
  const handleChangeState = () => {
    setState(false);
  };
  return (
    <div className="container">
      {state ? <Form handleChangeState={handleChangeState} /> : <Text />}
    </div>
  );
};

export default App;
