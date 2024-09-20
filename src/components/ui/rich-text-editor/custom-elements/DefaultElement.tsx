import { RenderElementProps } from 'slate-react';

/* Represents a default element */
const DefaultElement: React.FC<RenderElementProps> = (props) => {
  return <p {...props.attributes}>{props.children}</p>;
};

export default DefaultElement;
