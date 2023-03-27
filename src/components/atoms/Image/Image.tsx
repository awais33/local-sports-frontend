import { ImageProps } from "./@types";

const Image = ({src, className = '', alt = ''}: ImageProps): JSX.Element => {
  return (
    <img className= {className} src= {src} alt= {alt} />
  );
};

export default Image;