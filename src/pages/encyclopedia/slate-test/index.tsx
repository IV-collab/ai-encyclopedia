import IVEditor from '@/components/ui/rich-text-editor/Editor';

const SlateTestPage = () => {
  return (
    <div className="iv-page size-full flex flex-col">
      <div className="fixed bottom-0 left-0 ml-96 w-[calc(100%-24rem)] border-t h-full p-5">
        <IVEditor />
      </div>
    </div>
  );
};

export default SlateTestPage;
