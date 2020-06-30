import React, { Component } from 'react';
import styled from 'styled-components';
import Input from './../../assets/Input/Input';
import PasswordInput from './../../assets/PasswordInput/PasswordInput';
import Button from './../../assets/Button/Button';

const StyledLoginForm = styled.div`
    width: 300px;
`;

const StyledPasswordInputDiv = styled.div`
    margin-top: 10px;
    margin-bottom: 20px;
`;

const StyledButtonDiv = styled.div`
    display: flex;
    justify-content: flex-end;
`;

class LoginForm extends Component<{}> {
    handleClickLogin() {
        console.log("You've logged in!");
    }

    render() {
        return (
            <StyledLoginForm>
                <Input placeholder="Login" />
                <StyledPasswordInputDiv>
                    <PasswordInput placeholder="Password" />
                </StyledPasswordInputDiv>
                <StyledButtonDiv>
                    <Button content="Log In" handleClick={this.handleClickLogin.bind(this)} />
                </StyledButtonDiv>
            </StyledLoginForm>
        )
    }
}

export default LoginForm;
