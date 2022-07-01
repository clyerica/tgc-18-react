import React from 'react'
import BudgetTracker from './BudgetTracker';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <React.Fragment>
      <div className="container mt-4">
        <BudgetTracker/>
      </div>
    </React.Fragment>
  );
}

export default App;
