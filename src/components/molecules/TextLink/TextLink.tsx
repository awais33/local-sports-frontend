import PTag from "../../atoms/PTag";
import { TextLinkProps } from "./@types";

const TextLink = ({ className, text, type, variant = 'warning', decoration = 'none', onClick }: TextLinkProps) => {
  return (
      <div role={type} onClick={onClick} className={className} >
        <PTag decoration={decoration} variant={variant}>
          {text}
        </PTag>
      </div>
  );
};

export default TextLink;