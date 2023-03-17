import { Stripe } from 'stripe'

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY

if (typeof STRIPE_SECRET_KEY !== 'string') throw new Error('STRIPE_SECRET_KEY env is required!')

export const stripe = new Stripe(STRIPE_SECRET_KEY, {
  apiVersion: '2022-11-15',
  appInfo: {
    name: 'Ignite Shop'
  }
})
