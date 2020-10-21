import React from 'react';
import axios from 'axios';

class InquiryForm extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      firstName: ""
    };
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this)
  }
  
  handleChange(event) {
    let setValue = event.target.value;
    if (event.target.getAttribute("type") === "checkbox") setValue = event.target.checked;
    
    let newState = this.state;
    newState[event.target.name] = setValue;
    this.setState(newState);
  }
  
  handleSubmit(event) {
    event.preventDefault();
    
    let formVals = this.state;
    formVals["_token"] = this.props.csrfToken;
    
    axios.post(process.env.REACT_APP_API_URL+"/api/new_inquiry", formVals)
    .then(inquiryResponse => {
      this.props.inquiryFormSubmitted(inquiryResponse.data);
    });
  }
  
  render() {
    let renderedOfferedServices = [];
    
    for (let offeredService of this.props.offeredServices) {
      let inputName = "offered_service_"+offeredService.offered_service_id;
      renderedOfferedServices.push(
        <div key={offeredService.offered_service_id}>
          <div className="ui checkbox">
            <input type="checkbox" name={inputName} id={inputName} onChange={this.handleChange} />
            <label htmlFor={inputName}>
              {offeredService.offered_service}
            </label>
          </div>
          <br/>
        </div>
      );
    }
    
    return (
      <form onSubmit={this.handleSubmit} className="ui form">
        <div className="field">
          Welcome to the Drilling Services Inquiry Demo. To inquire about our services, please fill out the form below.<br/>
        </div>
        
        <div className="field">
          <label>Please enter your name:</label>
          <input type="text" name="firstName" placeholder="First name" value={this.state.firstName} onChange={this.handleChange} />
        </div>
        
        <p>Which of the following services are you interested in?</p>

        {renderedOfferedServices}
        
        <br/>
        <button className="ui primary button">Submit Inquiry</button>
      </form>
    );
  }
}

export default InquiryForm;
