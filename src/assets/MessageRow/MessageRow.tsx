import React, { FC } from 'react';
import moment from 'moment';
import styled from 'styled-components';
import { Comment, Tooltip, List } from 'antd';

import UserAvatar from '../Avatar/Avatar';
import MessageRowProps from './MessageRowProps';

const StyledSingleMsg = styled.li`
    &:hover {
        background-color: aqua;
    }
`;

const MessageRow: FC<MessageRowProps> = (props): JSX.Element => {
    const {
        messages,
        gravatar,
        username,
        dateCreated
    } = props;

    function handleMouseOver(e: any) {
        // TODO show buttons
    }

    return (
        <Comment
            content={
                <List
                    itemLayout="horizontal"
                    dataSource={messages}
                    renderItem={item =>
                        (<StyledSingleMsg key={item.messageID} title={moment(item.dateCreated).format('YYYY-MM-DD HH:mm:ss')} onMouseOver={() => handleMouseOver(item.messageID)} >
                            {item.message}
                        </StyledSingleMsg>)
                    }
                />
            }
            author={<div>{username}</div>}
            avatar={
                <UserAvatar src={gravatar} />
            }
            datetime={
                <Tooltip title={moment(dateCreated).format('YYYY-MM-DD HH:mm:ss')}>
                    <span>{moment(dateCreated).fromNow()}</span>
                </Tooltip>
            }
        />
    );
}

export default MessageRow;