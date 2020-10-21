import React from 'react';
import InquiryForm from './InquiryForm';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  state = {
    "session_key": "",
    "offered_services": []
  }
  
  fetchSession() {
    axios.get(process.env.REACT_APP_API_URL+"/fetch_session")
    .then(session_response => {
      this.setState({
        session_key: session_response.data.session_key,
        offered_services: session_response.data.offered_services
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
              <InquiryForm offeredServices={this.state.offered_services}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
