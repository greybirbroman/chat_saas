import React from 'react';
import Logo from './Logo';
import DarkModeButton from './DarkModeButton';
import ProfileButton from './ProfileButton';
const Header = () => {
  return (
    <header className='sticky top-0 bg-slate-300 dark:bg-gray-900'>
      <nav className='flex flex-col sm:flex-row items-center p-5 bg-slate-300 dark:bg-gray-900 max-w-7xl mx-auto'>
        <Logo />
        <div className='flex-1 flex items-center justify-end gap-4'>
          <DarkModeButton />
          <ProfileButton/>
        </div>
      </nav>
    </header>
  );
};

export default Header;
