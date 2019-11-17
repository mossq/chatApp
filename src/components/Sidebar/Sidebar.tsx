import React, { Component } from 'react';
import styled from 'styled-components';

import ChannelList from './../../assets/ChannelList/ChannelList';

const data = [
  {
    name: "A",
    type: "public",
    muted: true,
    hasunreadmsg: true,
    mentions: 0,
    icon: "public"
  },
  {
    name: "B",
    type: "public",
    muted: true,
    hasunreadmsg: false,
    mentions: 0,
    icon: "public"
  },
  {
    name: "C",
    type: "public",
    muted: false,
    hasunreadmsg: true,
    mentions: 3,
    icon: "public"
  },
  {
    name: "A",
    type: "private",
    muted: false,
    hasunreadmsg: true,
    mentions: 0,
    icon: "private"
  },
  {
    name: "B",
    type: "private",
    muted: true,
    hasunreadmsg: false,
    mentions: 0,
    icon: "private"
  },
  {
    name: "Piotr",
    type: "direct",
    muted: false,
    hasunreadmsg: true,
    mentions: 10,
    icon: "direct"
  }
];

const StyledSidebar = styled.div`
    width: 17%;
    background-color: #4a5e80;
    color: #faecde;
    padding: 15px;
    font-size: 18px;
    display: inline-block;
    overflow: auto;
    height: 100%;
    max-width: 220px;
`;
class Sidebar extends Component<{}> {
  handleClickAdd() {
    console.log("Add new channel");
  }

  render() {
    return (
      <StyledSidebar>
        <ChannelList data={data} title="Public" handleClickAdd={this.handleClickAdd.bind(this)} type="public" />
        <ChannelList data={data} title="Private" handleClickAdd={this.handleClickAdd.bind(this)} type="private" />
        <ChannelList data={data} title="Direct" handleClickAdd={this.handleClickAdd.bind(this)} type="direct" />
      </StyledSidebar>
    )
  }
}

export default Sidebar;