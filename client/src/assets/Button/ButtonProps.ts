export default interface ButtonProps {
    content: string,
    handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}