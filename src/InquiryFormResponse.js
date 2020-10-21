import React from 'react';
import axios from 'axios';

class InquiryFormResponse extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        {this.props.responseMessage}
      </div>
    )
  }
}

export default InquiryFormResponse;
