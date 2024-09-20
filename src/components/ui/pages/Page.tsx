import React from 'react';

import { useSidebarContext } from '@/contexts';

export function IVPage({ title, content }: { title: string; content?: React.ReactNode }) {
  const { isCollapsed } = useSidebarContext();

  return (
    <div
      className={`iv-page ${isCollapsed ? 'w-[50%]' : 'w-[70%]'} m-0 pt-40 flex flex-col items-center text-nearBlack`}
    >
      <div className="title-wrapper w-[100%] text-4xl font-bold mb-10">
        <p>{title}</p>
      </div>
      <div className="content">{content}</div>
    </div>
  );
}

export default IVPage;
