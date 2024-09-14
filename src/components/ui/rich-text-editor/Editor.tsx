import { useState, useCallback, ReactElement } from 'react';

import { createEditor, Editor, Descendant } from 'slate';
import { Slate, Editable, withReact, RenderElementProps } from 'slate-react';

import { CustomElementTypes } from '@/lib/enums/iv-editor';
import { handleKeyDown } from '@/lib/helpers/iv-editor';

import CodeElement from '@/components/ui/rich-text-editor/custom-elements/CodeElement';
import DefaultElement from '@/components/ui/rich-text-editor/custom-elements/DefaultElement';

const initialValue: Descendant[] = [
  {
    type: CustomElementTypes.PARAGRAPH,
    children: [{ text: 'A line of text in a paragraph.' }],
  },
];

const IVEditor = () => {
  const [editor] = useState<Editor>(() => withReact(createEditor()));

  const renderElement = useCallback((props: RenderElementProps): ReactElement => {
    switch (props.element.type) {
      case CustomElementTypes.CODE:
        return <CodeElement {...props} />;
      case CustomElementTypes.PARAGRAPH:
        return <DefaultElement {...props} />;
      default:
        return <DefaultElement {...props} />;
    }
  }, []);

  return (
    <Slate editor={editor} initialValue={initialValue}>
      <Editable
        className="size-full outline-none"
        renderElement={renderElement}
        onKeyDown={(e) => handleKeyDown(e, editor)}
      />
    </Slate>
  );
};

export default IVEditor;
