export type ButtonProps = {
    Children?: JSX.Element | string;
    className?: string;
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
    onClick?: () => void;
}