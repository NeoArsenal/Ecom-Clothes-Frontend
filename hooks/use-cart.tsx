import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { ProductType } from "@/types/product";
import { toast } from "sonner";

interface CartStore {
    items: ProductType[];
    addItem: (data: ProductType) => void;
    removeItem: (id: number) => void;
    removeAll: () => void;
}

export const useCart = create(persist<CartStore>((set, get) => ({
    items: [],
    addItem: (data: ProductType) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item.id === data.id);

        if (existingItem) {
            // Sintaxis corregida para Sonner (Error)
            toast.error("El producto ya existe en el carrito");
            return;
        }

        set({
            items: [...get().items, data],
        });

        // Sintaxis corregida para Sonner (Éxito)
        toast.success("Producto agregado al carrito 🛒");
    },
    removeItem: (id: number) => {
        set({ items: [...get().items.filter((item) => item.id !== id)] });
        // Sintaxis corregida para Sonner (Normal)
        toast("Producto eliminado del carrito 🗑️");  
    },
    removeAll: () => {
        set({ items: [] });
    }
}), {
    name: "cart-storage",
    storage: createJSONStorage(() => localStorage),
}));