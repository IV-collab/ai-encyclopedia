import { SidebarItemsTypes } from "@/lib/enums/sidebar"
import { IVSidebarItems } from '@/components/ui/sidebar/SidebarItems'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export type SidebarItem = {
    type: SidebarItemsTypes;
    trigger: string;
    content: string | SidebarItem[];
}

export function IVSidebar({
    items,
}: {
    items: SidebarItem[];
}) {
  return (
    <div className="iv-sidebar w-96 min-h-screen pl-8 pr-8 pt-8 bg-secondary">
      <div className="text-primary pb-10 text-2xl border-b font-semibold">AI Encyclopedia</div>
      <Accordion type="single" collapsible>
        {/* We could just use IVSidebarItems, but we would like a border only on the first level of items.
            Thus, we manually render one cycle of IVSidebarItems with enableBorder=true.
        */}
        {
          items && items.length > 0 ? (
            items.map((item, index) => (
              item.type == SidebarItemsTypes.NESTED ? (
                // If item is nested, then recursively render item
                typeof item.content == 'string' ? 'ERROR' :
                // Value of item must be unique, such that triggers don't interfere with other items
                <AccordionItem value={`item-${index}`} enableBorder={true}>
                  <AccordionTrigger>{item.trigger}</AccordionTrigger>
                  <AccordionContent>
                    <IVSidebarItems
                      items={item.content}
                    />
                  </AccordionContent>
                </AccordionItem>
              ) : (
                // If item is not of a special type, render item directly
                <AccordionItem value={`item-${index}`} enableBorder={true}>
                    <AccordionTrigger>{item.trigger}</AccordionTrigger>
                    <AccordionContent>
                        {typeof item.content == 'string' ? item.content : 'ERROR'}
                    </AccordionContent>
                </AccordionItem>
              )
            ))
          ) : (<div>ERROR</div>)
        }
      </Accordion>
    </div>
  );
};

export default IVSidebar;
