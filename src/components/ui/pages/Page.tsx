import React from 'react';

export function IVPage({ title, content }: { title: string; content?: React.ReactNode }) {
  return (
    <div className="iv-page size-full m-0 pt-40 pl-60 pr-60 flex flex-col text-nearBlack">
      <div className="title-wrapper text-4xl font-bold mb-10">
        <p>{title}</p>
      </div>
      <div className="content">{content}</div>
    </div>
  );
}

export default IVPage;
