export type PTagProps = {
    children: string;
    className?: string;
    variant?: 'primary' | 'secondary' | 'warning' | 'white' | 'dark';
    weight?: 'normal' | 'light' | 'bold';
    decoration?: 'none' | 'underline';
    htmlFor?: string;
}