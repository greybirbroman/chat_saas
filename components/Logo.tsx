import LogoImage from '../public/logo_transparent.svg';
import Link from 'next/link';
import Image from 'next/image';
import { AspectRatio } from './ui/aspect-ratio';

const Logo = () => {
  return (
    <Link href='/' prefetch={false}>
      <div className='flex items-center w-72 h-14'>
        <AspectRatio className='flex items-center justify-center'>
          <Image
            priority
            src={LogoImage}
            alt='Logo, Image'
            className='dark:filter invert'
          />
          <p>Chat with Anyone</p>
        </AspectRatio>
      </div>
    </Link>
  );
};

export default Logo;
