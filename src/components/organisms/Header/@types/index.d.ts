export type HeaderProps = {
    // text: string;
    type?: 'button';
    variant?: 'primary' | 'secondary' | 'warning' | 'white' | 'dark';
    decoration?: 'none' | 'underline';
    onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
}