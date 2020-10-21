import React from 'react';

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
  }
  render() {
    let renderedOfferedServices = [];
    
    for (let offeredService of this.props.offeredServices) {
      renderedOfferedServices.push(
        <div key={offeredService.offered_service_id}>
          <div className="ui checkbox">
            <input type="checkbox" name={offeredService.offered_service_short} id={offeredService.offered_service_short} />
            <label htmlFor={offeredService.offered_service_short}>{offeredService.offered_service}</label>
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
          <input type="text" name="firstName" placeholder="First name" value={this.state.username} onChange={this.handleChangeFirstName} />
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
