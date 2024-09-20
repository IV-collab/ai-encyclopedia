import { RenderElementProps } from 'slate-react';

/* Represents a code block */
const CodeElement: React.FC<RenderElementProps> = (props) => {
  return (
    <pre {...props.attributes}>
      <code>{props.children}</code>
    </pre>
  );
};

export default CodeElement;
