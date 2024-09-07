import { SidebarItemsTypes } from '@/lib/enums/sidebar';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { SidebarItem } from '@/components/ui/sidebar/Sidebar';

export function IVSidebarItems({ items }: { items: SidebarItem[] }) {
  return (
    <Accordion type="single" collapsible>
      {items && items.length > 0 ? (
        items.map((item, index) =>
          item.type == SidebarItemsTypes.NESTED ? (
            // If item is nested, then recursively render item
            typeof item.content == 'string' ? (
              'ERROR'
            ) : (
              // Value of item must be unique, such that triggers don't interfere with other items
              <AccordionItem value={`item-${index}`}>
                <AccordionTrigger>{item.trigger}</AccordionTrigger>
                <AccordionContent>
                  <IVSidebarItems items={item.content} />
                </AccordionContent>
              </AccordionItem>
            )
          ) : (
            // If item is not of a special type, render item directly
            <AccordionItem value={`item-${index}`}>
              <AccordionTrigger>{item.trigger}</AccordionTrigger>
              <AccordionContent>{typeof item.content == 'string' ? item.content : 'ERROR'}</AccordionContent>
            </AccordionItem>
          ),
        )
      ) : (
        <div></div>
      )}
    </Accordion>
  );
}

export default IVSidebarItems;
