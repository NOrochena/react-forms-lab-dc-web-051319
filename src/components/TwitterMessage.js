import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      max: this.props.maxChars
    };
  }
  
  handleOnChange = (event) => {
    this.setState({
      message: event.target.value,
    })
  }



  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={this.handleOnChange}/>
        <div>Remaining Characters: {this.state.max - this.state.message.length}</div>
      </div>
    );
  }
}

export default TwitterMessage;
