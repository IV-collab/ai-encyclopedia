import capybaraHead from '@/assets/img/capybara_head.svg';

import { IconTypes, IconSizes } from '@/lib/enums/icon';

export function IVIcon({ type, size = IconSizes.MEDIUM }: { type: IconTypes; size?: IconSizes }) {
  /**
   * Returns the src of an icon depending on the type given.
   * @param type The type of icon to use. Dictates which image is displayed.
   * @returns The src of the icon to display
   */
  const iconSrc = (type: IconTypes): string => {
    switch (type) {
      case IconTypes.CAPYBARA:
        return capybaraHead;
      default:
        return capybaraHead;
    }
  };

  return <img src={iconSrc(type)} alt="Logo" className={size} />;
}

export default IVIcon;
