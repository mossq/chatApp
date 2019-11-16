import React from 'react';
import { Avatar } from 'antd';

import AvatarProps from './AvatarProps';

const UserAvatar: React.FC<AvatarProps> = (props): JSX.Element => {
    return <Avatar src={props.src} alt={props.alt} />
}

UserAvatar.defaultProps = {
    alt: "avatar"
}

export default UserAvatar;