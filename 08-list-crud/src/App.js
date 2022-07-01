import React from "react";
import Tasklist from "./Tasklist";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <Tasklist />
      </div>
    </React.Fragment>
  );
}

export default App;
