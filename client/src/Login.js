import React from 'react';
import LoginForm from './components/LoginForm/LoginForm';
import styled from 'styled-components';
import 'antd/dist/antd.css';

const StyledMainContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

function Login() {
    return (
        <React.Fragment>
            <StyledMainContainer>
                <LoginForm />
            </StyledMainContainer>
        </React.Fragment>
    );
}

export default Login;
