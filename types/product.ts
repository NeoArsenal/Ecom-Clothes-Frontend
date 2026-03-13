// types/product.ts
export type ProductType = {
    id: number;
    documentId: string;
    productName: string;
    slug: string;
    description: string;
    active: boolean;
    isFeatured: boolean;
    price: number;
    Size: string; 
    images: {
        id: number;
        url: string;
        name: string;
    }[];
    category: {
        id: number;
        slug: string;
        categoryName: string;
    };
};