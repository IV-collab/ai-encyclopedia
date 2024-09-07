import { SidebarItemsTypes } from '@/lib/enums/sidebar';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { SidebarItem } from '@/components/ui/sidebars/Sidebar';

export function IVSidebarItems({ items, level = 0 }: { items: SidebarItem[]; level?: number }) {
  // When level is 0 (The first level of items), show bottom border under each item
  const enableBorder: boolean = level == 0;

  const recursiveAccordionItem = (index: number, trigger: string, content: SidebarItem[] | string) => {
    if (typeof content == 'string') {
      return 'ERROR';
    } else {
      return (
        // Value of item must be unique, such that triggers don't interfere with other items
        <AccordionItem value={`item-${index}`} enableBorder={enableBorder}>
          <AccordionTrigger>{trigger}</AccordionTrigger>
          <AccordionContent>
            <IVSidebarItems items={content} level={level + 1} />
          </AccordionContent>
        </AccordionItem>
      );
    }
  };

  const defaultAccordionItem = (index: number, trigger: string, content: SidebarItem[] | string) => {
    return (
      // Value of item must be unique, such that triggers don't interfere with other items
      <AccordionItem value={`item-${index}`} enableBorder={enableBorder}>
        <AccordionTrigger>{trigger}</AccordionTrigger>
        <AccordionContent>{typeof content == 'string' ? content : 'ERROR'}</AccordionContent>
      </AccordionItem>
    );
  };

  return (
    <Accordion type="single" collapsible>
      {items && items.length > 0 ? (
        items.map((item, index) =>
          item.type == SidebarItemsTypes.NESTED
            ? recursiveAccordionItem(index, item.trigger, item.content)
            : defaultAccordionItem(index, item.trigger, item.content),
        )
      ) : (
        <div>ERROR</div>
      )}
    </Accordion>
  );
}

export default IVSidebarItems;
