import { loadStripe } from "@stripe/stripe-js";

// asegurarse de que la variable de entorno pública está definida
export const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);
