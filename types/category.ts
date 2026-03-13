// types/category.ts
export type CategoryType = {
    id: number;
    documentId: string;
    categoryName: string;
    slug: string;
    mainImage: {
        id: number;
        url: string;
    };
};