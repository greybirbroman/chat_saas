import Link from 'next/link';
import Image from 'next/image';
import MainPageImage from '../public/metaversus.png';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className='relative sm:p-16 xs:p-8 px-6 py-12 pb-40'>
      <div className='gradient-03 -z-10' />
      <h1 className='text-4xl font-bold tracking-tight sm:text-6xl'>
        Chat with Anyone, anywhere!
      </h1>
      <p className='mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300'>
        You speak your language, they speak their language.{' '}
        <span className='text-indigo-600 dark:text-indigo-500'>
          Let AI handle the translation.
        </span>
      </p>

      <div className='flex mt-10 items-center justify-center gap-6'>
        <Link href='/chat'>
          <Button className='bg-indigo-500 text-white hover:bg-indigo-600'>
            Get Started
          </Button>
        </Link>
        <Link
          href='/pricing'
          className='flex gap-2 items-center hover:text-indigo-500'
        >
          View Pricing
          <ArrowRight />
        </Link>
      </div>

      <div>
        <div className='mt-16 flow-root sm:mt-24 rounded-xl bg-gray-900/5 ring ring-inset ring-gray-900/10 lg:rounded-2xl'>
          <Image
            src={MainPageImage}
            alt='App Screenshot, Image'
            unoptimized
            width={2400}
            height={1440}
            className='rounded-xl bg-gray-900/5 ring ring-inset ring-gray-900/10 lg:rounded-2xl'
          />
        </div>
      </div>
    </div>
  );
}
