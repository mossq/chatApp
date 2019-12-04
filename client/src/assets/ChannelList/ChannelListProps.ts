export default interface channelListProps {
    title: string,
    data: Array<ChannelData>,
    handleClickAdd: (event: React.MouseEvent<HTMLButtonElement>) => void,
    handleClickMore?: (event: React.MouseEvent<HTMLButtonElement>) => void,
    type: string //public, private, direct
}

interface ChannelData {
    name: string,
    type: string,
    muted: boolean, 
    hasunreadmsg: boolean,
    mentions: number,
    icontype?: string
}