import React from 'react';
import InquiryForm from './InquiryForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="ui container">
        <div className="ui segments">
          <div className="ui segment">
            <InquiryForm/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
