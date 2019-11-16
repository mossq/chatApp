import React from 'react';
import styled from 'styled-components';

import MessageRow from './../../assets/MessageRow/MessageRow';
import MessageBoardProps from './MessageBoardProps';

const StyledMessageBoard = styled.div`
    padding: 15px;
    font-size: 18px
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
