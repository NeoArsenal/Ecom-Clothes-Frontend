"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

const PageSuccess = () => {
  const router = useRouter();
  return (
    <div className="max-w-5xl p-4 mx-auto sm:py-16 sm:px-24">
        <div className="flex flex-col-reverse gap-2 sm:flex-row">
            <div className="flex justify-center sm:min-w-[400px]">
                <Image src="/success.jpg" alt="Success" width={250} height={500} className="rounded-lg" />
            </div>
            <div>
                <h1 className="text-4xl font-bold">¡Compra exitosa!</h1>
                <p className="mt-4 text-lg">Gracias por tu compra. Tu pedido ha sido procesado correctamente.</p>
                <p className="mt-2 text-lg">Recibirás un correo de confirmación con los detalles de tu pedido.</p>
                <p className="mt-2 text-lg">¡Esperamos que disfrutes tus productos!</p>

                <Button onClick={() => router.push("/")}>
                  Volver a la tienda
                </Button>
            </div>
        </div>
    </div>

  );
}

export default PageSuccess;