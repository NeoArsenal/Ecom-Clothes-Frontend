/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { useGetCategories } from "@/api/getProducts";
import { ResponnseType } from "@/types/response";
import { CategoryType } from "@/types/category";

const ChooseCategory = () => {
  // Obtenemos los datos del hook y forzamos el tipado para Strapi v5
  const { result, loading }: ResponnseType = useGetCategories();

  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
      <h3 className="px-6 pb-4 text-3xl sm:pb-8">Elige tu categoría favorita</h3>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-0">
        {/* Renderizado para Strapi v5: Datos directos sin .attributes */}
        {!loading && result !== null && Array.isArray(result) && (
          result.map((category: CategoryType) => (
            <Link
              key={category.id}
              href={`/category/${category.slug}`}
              className="relative max-w-xs mx-auto overflow-hidden bg-no-repeat bg-cover rounded-lg"
            >
              <img
                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${category.mainImage?.url}`}
                alt={category.categoryName}
                className="w-full h-[400px] object-cover transition duration-300 ease-in-out hover:scale-110"
              />
              {/* Opcional: Nombre de la categoría sobre la imagen */}
              <p className="absolute w-full py-2 text-lg font-bold text-center text-white bottom-5 backdrop-blur-lg">
                {category.categoryName}
              </p>
            </Link>
          ))
        )}

        {/* Skeleton o mensaje de carga opcional */}
        {loading && <p className="px-6">Cargando categorías...</p>}
      </div>
    </div>
  );
};

export default ChooseCategory;