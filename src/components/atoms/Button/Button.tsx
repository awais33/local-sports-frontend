import { ButtonProps } from "./@types";

const ButtonComponent = ({
    Children,
    onClick,
    className = '',
    disabled = false,
    type = 'button',
}: ButtonProps) => {
  return (
    <button 
    className={className} 
    onClick={()=>{
      if (onClick) {
        onClick();
      }
    }}
    disabled={disabled}
    type={type}
    >
    {Children}
    </button>
  );
};

export default ButtonComponent;