import { BaseEditor } from 'slate';
import { ReactEditor } from 'slate-react';

import { CustomElement, CustomText } from '@/lib/types/iv-editor';

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}
