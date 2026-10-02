
export interface Rating {
    rate: number;
    count: number;
}

export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rating;
}

// Es necesario para crear un producto sin id ni rating
export type createProductDTO = Omit<Product, "id" | "rating">;
