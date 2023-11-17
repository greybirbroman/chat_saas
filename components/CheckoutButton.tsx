'use client';
import { Button } from './ui/button';

const CheckoutButton = () => {
  const createCheckoutSession = async () => {
    
  };

  return (
    <div className='flex flex-col'>
      <Button
        onClick={() => createCheckoutSession()}
        className='bg-indigo-500 hover:bg-indigo-600 text-white self-center w-full mt-8'
      >
        Sign Up
      </Button>
    </div>
  );
};

export default CheckoutButton;
