import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

interface IUserAvatar {
  name?: string | null;
  image?: string | null;
  className?: string;
}

const splitUserName = (name: string | null | undefined) => {
  return name
    ?.split(' ')
    .map((n) => n[0])
    .join('');
};

const UserAvatar = ({ name, image, className }: IUserAvatar) => {
  return (
    <Avatar className={cn('bg-white text-gray-900', className)}>
      {image && (
        <Image
          src={image || ''}
          alt={name || ''}
          width={40}
          height={40}
          className='rounded-full'
        />
      )}
      <AvatarFallback delayMs={1000} className='dark:bg-slate-300 bg-white'>
        {splitUserName(name)}
      </AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
