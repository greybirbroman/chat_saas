import Link from 'next/link';
import Logo from './Logo';
import DarkModeButton from './DarkModeButton';
import ProfileButton from './ProfileButton';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/auth';
import { MessagesSquare } from 'lucide-react';
import CreateChatButton from './CreateChatButton';

const Header = async () => {

const session = await getServerSession(authOptions)

console.log(session)

  return (
    <header className='sticky top-0 bg-white/50 dark:bg-gray-900 z-50'>
      <nav className='flex flex-col sm:flex-row items-center p-5 dark:bg-gray-900 max-w-7xl mx-auto'>
        <Logo />
        <div className='flex-1 flex items-center justify-end gap-4'>
          {session ? (
            <>
            <Link href='/chat' prefetch={false}>
              <MessagesSquare className=''/>
            </Link>
            <CreateChatButton />
            </>
          ) : (
            <Link href='/pricing'>Pricing</Link>
          )}
          <DarkModeButton />
          <ProfileButton session={session}/>
        </div>
      </nav>
    </header>
  );
};

export default Header;
