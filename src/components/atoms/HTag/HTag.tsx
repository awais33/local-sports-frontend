import { HTagProps } from "./@types";

const HTag = ({ children, className, size = '20', variant = 'warning'}: HTagProps): JSX.Element => {
  return (
    <h2 className={`p-tag ${className} text-${variant} fs-${size} text-${variant} m-0`}>{children}</h2>
  );
};

export default HTag;