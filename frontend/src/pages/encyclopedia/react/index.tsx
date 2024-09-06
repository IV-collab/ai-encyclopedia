import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const ReactPage = () => {
    return (
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Accordion trigger</AccordionTrigger>
          <AccordionContent>
            Accordion contents
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  };
  
  export default ReactPage;
  