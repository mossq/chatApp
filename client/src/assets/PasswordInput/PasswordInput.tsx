import React from 'react';
import { Input } from 'antd';
import styled from 'styled-components';

import PasswordInputProps from './PasswordInputProps';

const StyledPasswordInput = styled(Input.Password)`
    &.ant-input-affix-wrapper {
        height: 42px;
    }
`;

const PassInpt: React.FC<PasswordInputProps> = (props): JSX.Element => {
    const { placeholder } = props;

    return (
        <StyledPasswordInput placeholder={placeholder} />
    )
};

export default PassInpt;