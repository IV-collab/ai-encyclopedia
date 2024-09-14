import { useState, useCallback, ReactElement, KeyboardEvent } from 'react';

import { createEditor, Editor, Descendant, Transforms, Element } from 'slate';
import { Slate, Editable, withReact, RenderElementProps } from 'slate-react';

import { CustomElementTypes } from '@/lib/enums/iv-editor';

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

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>, editor: Editor) => {
    if (e.key === 'c' && (e.ctrlKey || e.metaKey)) {
      // Prevent the "`" from being inserted by default.
      e.preventDefault();
      // Determine whether any of the currently selected blocks are code blocks.
      const [match] = Editor.nodes(editor, {
        match: (n) => Element.isElement(n) && n.type === CustomElementTypes.CODE,
      });
      // Toggle the block type depending on whether there's already a match.
      Transforms.setNodes(
        editor,
        { type: match ? CustomElementTypes.PARAGRAPH : CustomElementTypes.CODE },
        { match: (n) => Element.isElement(n) && Editor.isBlock(editor, n) },
      );
    }
  };

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
