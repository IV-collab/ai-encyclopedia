import IVEditor from '@/components/ui/rich-text-editor/Editor';

const SlateTestPage = () => {
  return (
    <div className="iv-page size-full flex flex-col">
      <div className="m-0 pt-40 pl-60 pr-60 flex flex-col text-nearBlack">HELLO</div>
      <div className="fixed bottom-0 left-0 ml-96 w-[calc(100%-24rem)] h-40 bg-gray-50">
        <IVEditor />
      </div>
    </div>
  );
};

export default SlateTestPage;
