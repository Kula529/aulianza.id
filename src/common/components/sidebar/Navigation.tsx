import { useContext } from 'react';
import { BiCommand as CommandIcon } from 'react-icons/bi';
import { SiJavascript } from 'react-icons/si';
import { useWindowSize } from 'usehooks-ts';

import { MENU_ITEMS, SOCIAL_MEDIA } from '@/common/constant/menu';
import { CommandPaletteContext } from '@/common/context/CommandPaletteContext';

import Menu from './Menu';
import MenuItem from './MenuItem';
import Breakline from '../elements/Breakline';
import SocialMedia from '../elements/SocialMedia';

const Navigation = () => {
  const { setIsOpen } = useContext(CommandPaletteContext);
  const { width } = useWindowSize();
  const isMobile = width < 480;

  const filterdMenu = MENU_ITEMS?.filter((item) => item?.isShow);
  const filteredSocialMedia = SOCIAL_MEDIA?.filter((item) => item?.isShow);

  const handleOpenCommandPalette = () => {
    setIsOpen(true);
  };

  return (
    <>
      <Menu list={filterdMenu} />
      <div className='py-1'>
        <MenuItem
          title='Playground'
          href='/playground'
          icon={<SiJavascript size={18} />}
          isExternal={false}
        />
      </div>
      <MenuItem
        title={isMobile ? 'Command' : 'cmd + k'}
        href='#'
        icon={<CommandIcon size={20} />}
        isExternal={false}
        onClick={() => handleOpenCommandPalette()}
      >
        <div className='relative inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-green-200 text-green-800 '>
          <div className='absolute -ml-2 w-[4.5rem] rounded-full h-5 border-2 border-green-300 animate-badge-pulse'></div>
          <span>AI Powered</span>
        </div>
      </MenuItem>

      {isMobile && (
        <>
          <Breakline />
          <SocialMedia items={filteredSocialMedia} />
        </>
      )}
    </>
  );
};

export default Navigation;
