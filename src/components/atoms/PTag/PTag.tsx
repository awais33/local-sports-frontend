import { PTagProps } from "./@types";

const PTag = ({ children, className, variant = 'warning', weight = 'normal', decoration = 'none',}: PTagProps): JSX.Element => {
  return (
    <p className={`p-tag ${className} text-${variant} fw-${weight} text-decoration-${decoration} m-0`}>{children}</p>
  );
};

export default PTag;