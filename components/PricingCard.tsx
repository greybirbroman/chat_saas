import { CheckIcon } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';
import CheckoutButton from './CheckoutButton';

interface IPricingCard {
  redirect?: boolean;
  name: string;
  href: string;
  priceMonthly: string | null;
  description: string;
  features: string[];
}

const PricingCard = ({
  redirect,
  name,
  href,
  priceMonthly,
  description,
  features,
}: IPricingCard) => {
  return (
    <div className='flex flex-col justify-between rounded-3xl bg-white dark:bg-gray-900 p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10'>
      <h3 className='text-base font-semibold leading-7 text-indigo-600'>
        {name}
      </h3>
      <div className='mt-4 flex items-baseline pag-2'>
        {priceMonthly ? (
          <>
            <span className='text-5xl font-bold tracking-tight text-gray-900 dark:text-white'>
              {priceMonthly}
            </span>
            <span className='text-base font-semibold leading-7 text-gray-600 dark:text-white/50'>
              /month
            </span>
          </>
        ) : (
          <span className='text-5xl font-bold tracking-tight text-gray-900 dark:text-white'>
            Free
          </span>
        )}
      </div>

      <p className='mt-6 text-base leading-7 text-gray-600 dark:text-white/50'>{description}</p>
      <ul
        role='list'
        className='mt-10 space-y-4 text-sm leading-6 text-gray-600'
      >
        {features.map((item, index) => (
          <li key={index} className='flex gap-3 dark:text-white'>
            <CheckIcon
              className='h-6 w-5 flex-none text-indigo-600'
              aria-hidden='true'
            />
            {item}
          </li>
        ))}
      </ul>
      {redirect ? (
        <Link href='/register'>
          <Button className='bg-indigo-500 hover:bg-indigo-600 text-white self-center w-full mt-8'>
            Get Sarted Today
          </Button>
        </Link>
      ) : (
        priceMonthly && <CheckoutButton />
      )}
    </div>
  );
};

export default PricingCard;
