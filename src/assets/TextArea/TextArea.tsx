import React from 'react';
import { Input } from 'antd';

import TextAreaProps from './TextAreaProps';
import TextAreaState from './TextAreaState';

const { TextArea } = Input;

class TxtArea extends React.Component<TextAreaProps, TextAreaState> {
    constructor(props: Readonly<TextAreaProps>) {
        super(props);

        this.state = { value: "", placeholder: props.placeholderText };
        this.handlePressEnter = this.handlePressEnter.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handlePressEnter(event: React.KeyboardEvent<HTMLTextAreaElement>) {
        if (!event.shiftKey) {
            event.preventDefault();
            this.setState({ value: "" });
        }
    }

    handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
        this.setState({
            value: event.target.value
        });
    };

    static defaultProps = { placeholderText: "Start typing.." };

    render() {
        return (
            <TextArea onChange={this.handleChange} onPressEnter={this.handlePressEnter} placeholder={this.state.placeholder} value={this.state.value} />
        );
    }
}

export default TxtArea;