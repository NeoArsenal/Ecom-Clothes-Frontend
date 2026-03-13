"use client";

import axios from "axios";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/hooks/use-cart";
import { formatPrice } from "@/lib/formatPrice";
import CartItem from "./components/cart-item";
import { makePaymentRequest } from "@/api/payment";


export default function Page() {
  const { items, removeAll } = useCart();

  const prices = items.map((product) => product.price);
  const totalPrice = prices.reduce((total, price) => total + price, 0);

  const buyStripe = async () => {
    if (items.length === 0) return;

    try {
      console.log("makePaymentRequest baseURL", makePaymentRequest.defaults.baseURL);
  
      console.log("posting products", items);
      const res = await makePaymentRequest.post("/orders", {
        products: items,
      });

      console.log("order response", res.data);
      const session = res.data.session || res.data.stripeSession;
      if (session?.url) {
        removeAll();
        window.location.href = session.url;
      } 
      else {
        console.error("No session returned", res.data);
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.error("Request failed", error.response?.status, error.response?.data);
        if (error.response?.data?.error) {
          console.error("Backend says:", error.response.data.error);
        }
      } else if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error(error);
      }
    }
  };

  return (
    <div className="max-w-6xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
      <h1 className="mb-5 text-3xl font-bold">Carrito de compras</h1>
      <div className="grid sm:grid-cols-2 sm:gap-5">
        <div>
          {items.length === 0 && <p className="text-lg">Tu carrito está vacío</p>}
          <ul>
            {items.map((item) => (
              <CartItem key={item.id} product={item} />
            ))}
          </ul>
        </div>
        <div className="max-w-xl">
          <div className="p-6 rounded-lg bg-slate-100">
            <p className="mb-3 text-lg font-semibold">Order Summary</p>
            <Separator />
            <div className="flex justify-between gap-5 my-4">
              <p>Order total</p>
              <p>{formatPrice(totalPrice)}</p>
            </div>
            <div className="flex items-center justify-center w-full mt-3">
              <Button className="w-full" onClick={buyStripe} disabled={items.length === 0}>
                Comprar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
