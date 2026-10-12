
export interface Product {
    id: number;
    name: string;
    price: number;
}

export interface ProductCardProps {
    product: Product;
}

export interface ProductListProps {
    products: Product[];
}
