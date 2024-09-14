import { useState } from 'react';

import { createEditor, Editor, Descendant } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';

const initialValue: Descendant[] = [
  {
    type: 'paragraph',
    children: [{ text: 'A line of text in a paragraph.' }],
  },
];

const IVEditor = () => {
  const [editor] = useState<Editor>(() => withReact(createEditor()));

  return (
    <Slate editor={editor} initialValue={initialValue}>
      <Editable className="size-full outline-none" />
    </Slate>
  );
};

export default IVEditor;
