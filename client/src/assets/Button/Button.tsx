import React from 'react';
import { Button } from 'antd';
import styled from 'styled-components';

import ButtonProps from './ButtonProps';

const StyledButton = styled(Button)`
    &.ant-btn {
        padding: 12px;
        height: auto;
        font-size: 18px;
    }
`;

const Btn: React.FC<ButtonProps> = (props): JSX.Element => {
    const { handleClick, content } = props;
    return (
        <StyledButton type="primary" onClick={handleClick}>{content}</StyledButton>
    )
};

export default Btn;