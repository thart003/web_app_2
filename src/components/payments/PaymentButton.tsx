
// src/components/payment/PaymentButton.tsx
import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Button } from '@/components/ui/button';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

interface PaymentButtonProps {
  amount: number;
  disabled?: boolean;
}

export const PaymentButton: React.FC<PaymentButtonProps> = ({ amount, disabled }) => {
  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      if (!stripe) throw new Error('Stripe failed to initialize');

      const response = await fetch('/api/stripe/create-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount }),
      });

      const { sessionId } = await response.json();
      const result = await stripe.redirectToCheckout({
        sessionId,
      });

      if (result.error) {
        throw new Error(result.error.message);
      }
    } catch (error) {
      console.error('Payment error:', error);
      // Handle error (show toast notification, etc.)
    }
  };

  return (
    <Button
      onClick={handlePayment}
      disabled={disabled}
      className="w-full"
    >
      Pay ${amount}
    </Button>
  );
};