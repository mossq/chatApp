import React from 'react';
import { Input } from 'antd';
import styled from 'styled-components';

import InputProps from './InputProps';

const StyledInput = styled(Input)`
    &.ant-input {
        height: 42px;
    }
`;

const Inpt: React.FC<InputProps> = (props): JSX.Element => {
    const { placeholder } = props;

    return (
        <StyledInput placeholder={placeholder} />
    )
};

export default Inpt;