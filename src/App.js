import React from 'react';
import InquiryForm from './InquiryForm';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  state = {
    "sessionKey": "",
    "csrfToken": "",
    "offeredServices": []
  }
  
  fetchSession() {
    axios.get(process.env.REACT_APP_API_URL+"/api/fetch_session")
    .then(sessionResponse => {
      this.setState({
        sessionKey: sessionResponse.data.sessionKey,
        csrfToken: sessionResponse.data.csrfToken,
        offeredServices: sessionResponse.data.offeredServices
      });
    });
  }

  componentDidMount() {
    this.fetchSession();
  }
  
  render() {
    return (
      <div className="App">
        <div className="ui container">
          <div className="ui segments">
            <div className="ui segment">
              <InquiryForm offeredServices={this.state.offeredServices} csrfToken={this.state.csrfToken} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
