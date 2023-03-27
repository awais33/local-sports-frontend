export type TextLinkProps = {
    text: string;
    type?: 'button';
    className?: string;
    variant?: 'primary' | 'secondary' | 'warning' | 'white' | 'dark';
    decoration?: 'none' | 'underline';
    onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
}