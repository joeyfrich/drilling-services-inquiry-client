import React from 'react';
import InquiryForm from './InquiryForm';
import InquiryFormResponse from './InquiryFormResponse';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  state = {
    sessionKey: "",
    csrfToken: "",
    offeredServices: [],
    inquiryFormOpen: true,
    inquiryResponseMessage: ""
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
  
  inquiryFormSubmitted(apiResponse) {
    this.setState({
      inquiryFormOpen: false,
      inquiryResponseMessage: apiResponse.message
    });
  }
  
  render() {
    return (
      <div className="App">
        <div className="ui container">
          <div className="ui segments">
            <div className="ui segment">
              {this.state.inquiryFormOpen &&
                <InquiryForm offeredServices={this.state.offeredServices} csrfToken={this.state.csrfToken} inquiryFormSubmitted={this.inquiryFormSubmitted.bind(this)} />
              }
              {this.state.inquiryResponseMessage &&
                <InquiryFormResponse responseMessage={this.state.inquiryResponseMessage} />
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
