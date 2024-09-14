import React, { useState } from 'react';

import { createEditor, Editor, BaseEditor, Descendant } from 'slate';

import { Slate, Editable, withReact, ReactEditor } from 'slate-react';

type CustomElement = { type: 'paragraph'; children: CustomText[] };
type CustomText = { text: string };

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}

const initialValue: Descendant[] = [
  {
    type: 'paragraph',
    children: [{ text: 'A line of text in a paragraph.' }],
  },
];

const SlateTestPage = () => {
  const [editor] = useState<Editor>(() => withReact(createEditor()));

  return (
    <div className="iv-page size-full flex flex-col">
      <div className="m-0 pt-40 pl-60 pr-60 flex flex-col text-nearBlack">HELLO</div>
      <div className="fixed bottom-0 left-0 ml-96 w-[calc(100%-24rem)] h-40 bg-gray-50">
        <Slate editor={editor} initialValue={initialValue}>
          <Editable className="size-full" />
        </Slate>
      </div>
    </div>
  );
};

export default SlateTestPage;
