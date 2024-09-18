import { Link } from 'react-router-dom';

import { SidebarItemTypes } from '@/lib/enums/sidebar';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { SidebarItem } from '@/components/ui/sidebars/Sidebar';

export function IVSidebarItems({ items, level = 0 }: { items: SidebarItem[]; level?: number }) {
  // When level is 0 (The first level of items), show bottom border under each item
  const enableBorder: boolean = level == 0;

  const recursiveAccordionItem = (
    id: string,
    index: number,
    trigger: string,
    content: SidebarItem[] | string,
  ): React.ReactNode | string => {
    if (typeof content == 'string') {
      return 'ERROR';
    } else {
      return (
        // Value of item must be unique, such that triggers don't interfere with other items
        <AccordionItem key={`accordion-item-${id}`} value={`item-${index}`} enableBorder={enableBorder}>
          <AccordionTrigger>{trigger}</AccordionTrigger>
          <AccordionContent>
            <IVSidebarItems items={content} level={level + 1} />
          </AccordionContent>
        </AccordionItem>
      );
    }
  };

  const defaultAccordionItem = (
    id: string,
    index: number,
    trigger: string,
    content: SidebarItem[] | string,
    link?: string,
  ): React.ReactNode => {
    return (
      // Value of item must be unique, such that triggers don't interfere with other items
      <AccordionItem key={`accordion-item-${id}`} value={`item-${index}`} enableBorder={enableBorder}>
        <AccordionTrigger>{trigger}</AccordionTrigger>
        <AccordionContent>
          {
            // Params content and link must be valid
            typeof content == 'string' && typeof link === 'string' ? <Link to={link}>{content}</Link> : 'ERROR'
          }
        </AccordionContent>
      </AccordionItem>
    );
  };

  return (
    <Accordion type="single" collapsible>
      {items && items.length > 0 ? (
        items.map((item, index) =>
          item.type == SidebarItemTypes.NESTED
            ? recursiveAccordionItem(item.id, index, item.trigger, item.content)
            : defaultAccordionItem(item.id, index, item.trigger, item.content, item.link),
        )
      ) : (
        <div>ERROR</div>
      )}
    </Accordion>
  );
}

export default IVSidebarItems;
