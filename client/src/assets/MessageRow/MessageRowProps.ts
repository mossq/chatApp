import MessageData from './MessageData';

export default interface MessageRowProps {
    username: string,
    userID: number,
    gravatar: string,
    dateCreated: string, // TODO read this from first MessageData object
    messages: Array<MessageData>
}