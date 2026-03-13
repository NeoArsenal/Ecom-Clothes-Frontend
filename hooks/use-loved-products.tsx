import {create} from "zustand";
import {persist, createJSONStorage} from "zustand/middleware";
import {ProductType} from "@/types/product";
import {toast} from "sonner";

interface UseLovedProductsType {
    lovedItems: ProductType[];
    addLovedItem: (product: ProductType) => void;
    removeLovedItem: (productId: number) => void;
}

export const useLovedProducts = create(persist<UseLovedProductsType>((set, get) => ({
    lovedItems: [],
    addLovedItem: (product: ProductType) => {
        const currentLovedItems = get().lovedItems;
        const existingItem = currentLovedItems.find((item) => item.id === product.id);

        if(existingItem) {
            toast.error("El producto ya está en tus amados ❤️");
            return;
        }

        set({ lovedItems: [...currentLovedItems, product] });
        toast.success("Producto agregado a tus amados ❤️");
    },
    removeLovedItem: (productId: number) => {
        set({ lovedItems: [...get().lovedItems.filter((item) => item.id !== productId)] });
        toast("Producto eliminado de tus amados 🗑️");
    }

}),{
    name: "loved-products-storage",
    storage: createJSONStorage(() => localStorage),
}))