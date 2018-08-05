import { Input, Button } from "antd";
import React, { Component } from "react";

export default class FormInputButton extends Component {
  constructor(props) {
    super(props);

    const value = props.value;
    this.state = {
      content: value
    };
  }

  componentWillReceiveProps(nextProps) {
    // Should be a controlled component.
    if ("value" in nextProps) {
      const value = nextProps.value;
      this.setState({ content: value });
    }
  }

  handleValueChange = e => {
    this.setState({ content: e.target.value });
  };

  render() {
    const { size, loading, buttonContent, buttonEvent,placeholder,disabled } = this.props;
    const state = this.state;
    return (
      <span style={{display:"flex",alignItems:"center"}}>
        <Input
          placeholder={placeholder}
          size={size}
          value={state.content}
          onChange={this.handleValueChange}
          style={{ maxWidth: "60%", marginRight: "3%" }}
        />
        <Button
          size={size}
          type={"primary"}
          onClick={() => buttonEvent(state.content)}
          loading={loading}
          style={{minWidth:"37%"}}
          disabled={disabled}
        >
          {buttonContent}
        </Button>
      </span>
    );
  }
}
