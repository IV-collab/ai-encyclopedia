import { CustomElementTypes } from '@/lib/enums/iv-editor';

export type CustomText = { text: string };

export type CustomElement = {
  type: CustomElementTypes;
  children: CustomText[];
};
