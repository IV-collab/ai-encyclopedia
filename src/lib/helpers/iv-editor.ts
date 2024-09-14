import { KeyboardEvent } from 'react';

import { Editor, Transforms, Element } from 'slate';

import { CustomElementTypes } from '@/lib/enums/iv-editor';

export const handleTriggerCodeBlock = (editor: Editor) => {
  // Prevent the "`" from being inserted by default.
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
};

export const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>, editor: Editor) => {
  if ((e.key === 'C' && e.shiftKey && e.ctrlKey) || (e.key === 'c' && e.shiftKey && e.metaKey)) {
    e.preventDefault();
    handleTriggerCodeBlock(editor);
  }
};
