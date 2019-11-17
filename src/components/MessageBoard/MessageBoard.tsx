import React from 'react';
import styled from 'styled-components';

import MessageRow from './../../assets/MessageRow/MessageRow';
import MessageBoardProps from './MessageBoardProps';

const StyledMessageBoard = styled.div`
    position: absolute;
    bottom: 70px;
    width: 100%;
    overflow: auto;
    padding: 20px;
`;

const MessageBoard = (props: MessageBoardProps) => {
    return (
        <StyledMessageBoard>
            {props.data.map(item => {
                return <MessageRow key={item.userID} messages={item.messages} dateCreated={item.dateCreated} gravatar={item.gravatar} userID={item.userID} username={item.username} />
            })}
        </StyledMessageBoard>
    )
};

export default MessageBoard;
