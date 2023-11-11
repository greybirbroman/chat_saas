import PricingCard from '@/components/PricingCard';
import RadialGradient from '@/components/RadialGradient';
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
          <RadialGradient
            id='radial-gradient-pricing'
            firstColor='#7775D6'
            secondColor='#E935C1'
          />
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
