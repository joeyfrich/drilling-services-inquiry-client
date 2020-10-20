import React from 'react';
import axios from 'axios';

class InquiryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeFirstName = this.handleChangeFirstName.bind(this)
  }
  handleChangeFirstName(event) {
    this.setState({ firstName: event.target.value })
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log("submit form...");
    console.log(this.state);
    
    console.log("api url", process.env.REACT_APP_API_URL);
    
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        console.log("completed api request");
      })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="ui form">
        Welcome to the Drilling Services Inquiry Demo. To inquire about our services, please fill out the form below.<br/>
        <div className="field">
          <label>Please enter your name:</label>
          <input type="text" name="firstName" placeholder="First name" value={this.state.username} onChange={this.handleChangeFirstName} />
        </div>
        <button className="ui primary button">Submit Inquiry</button>
      </form>
    );
  }
}

export default InquiryForm;
