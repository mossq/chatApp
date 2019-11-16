import React from 'react';
import styled from 'styled-components';

import ChannelListProps from './ChannelListProps';

const Title = styled.h3`
    display: inline-block;
    border-bottom: 2px solid #d3d3d3;
    padding: 5px 10px;
    text-transform: uppercase;
`;

const Plus = styled.span`
    font-weight: bold;
    margin-left: 20px;
    cursor: pointer;
`;

const MoreChannels = styled.span`
    cursor: pointer;
    &:hover {
        color: black;
    }
`;

const List = styled.ul`
    list-style: none;
    padding: 0;
`;

let ListItem = styled.li`
    padding-left: 13px;
    padding-bottom: 5px;
    &::before {
        font-family: FontAwesome;
        display: inline-block;
        margin-left: -13px;
        margin-right: 5px;
        width: 13px;
    }
`;

const ChannelList: React.FC<ChannelListProps> = (props):JSX.Element => {
    const { handleClickAdd } = props;
    ListItem = styled(ListItem)`
        &::before {
            content: ${props.type === "public" ? '"\f0ac"' : props.type === "private" ? '"\f023"' : '"\f007"'}
        }
    `;

    return (
        <div>
            <Title>{props.title}</Title>
            <Plus onClick={handleClickAdd}><i className="fa fa-plus"></i></Plus>
            <List>
                {               
                    props.data.filter(obj => obj.type === props.type)
                    .map(obj => {                        
                        return <ListItem key={obj.name}>{obj.name}</ListItem>                       
                    })
                }
                {props.type !== "private" && <MoreChannels>More...</MoreChannels> }
            </List>
        </div>
    )
};

export default ChannelList;