import PricingCard from '@/components/PricingCard';
import { tiers } from '@/utils/constants';

const PricingPage = () => {
  return (
    <div className='isolate overflow-hidden bg-gray-900'>
      <div className='mx-auto max-w-7xl px-6 pb-96 pt-24 text-center sm:pt-32 lg:px-8'>
        <div className='mx-auto max-w-4xl'>
          <h2 className='text-base font-semibold leading-7 text-indigo-400'>
            Pricing
          </h2>
          <p className='mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl'>
            The right price for you,{' '}
            <br className='hidden sm:inline lg:hidden' />
            whoever you are
          </p>
        </div>

        <div className='relative mt-6'>
          <p className='mx-auto max-w-2xl text-lg leading-8 text-white/60'>
            Were 99% sure we have a plan to match 100% of your needs
          </p>
          <svg
            viewBox='0 0 1208 1024'
            className='absolute -top-10 left-1/2 -z-10 h-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:-top-12 md:-top-20 lg:-top-12 xl:top-0'
          >
            <ellipse
              cx={604}
              cy={512}
              fill='url(#radial-gradient-pricing)'
              rx={604}
              ry={512}
            />
            <defs>
              <radialGradient id='radial-gradient-pricing'>
                <stop stopColor='#7775D6' />
                <stop offset={1} stopColor='#E935C1' />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className='flow-root bg-white dark:bg-transparent pb-24 sm:pb-32'>
        <ul className='-mt-80 grid grid-cols-1 lg:grid-cols-2 mx-auto gap-8 max-w-md lg:max-w-4xl'>
          {tiers.map((item) => (
            <li key={item.id} className=''>
              <PricingCard {...item} redirect={true} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PricingPage;
