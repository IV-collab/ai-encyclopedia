import { SidebarItem } from '@/components/ui/sidebars/Sidebar';
import { SidebarItemTypes } from '@/lib/enums/sidebar';

const encyclopediaSidebarItems: SidebarItem[] = [
  {
    id: '0',
    type: SidebarItemTypes.NESTED,
    trigger: 'Git',
    content: [
      {
        id: '0-0',
        type: SidebarItemTypes.DEFAULT,
        trigger: 'Introduction',
        content: 'What is it?',
        link: 'git/what-is-it',
      },
    ],
  },
  {
    id: '1',
    type: SidebarItemTypes.NESTED,
    trigger: 'React',
    content: [
      {
        id: '1-0',
        type: SidebarItemTypes.DEFAULT,
        trigger: 'Introduction',
        content: 'What is it?',
      },
    ],
  },
];

export default encyclopediaSidebarItems;
