
import type { ProductListProps } from "../types/Product";

import { ProductCard } from "./ProductCard";

export function ProductList({ products }: ProductListProps) {
    return (
        <div className="product-grid">
            {products.map(
                (product) => (
                    <ProductCard key={product.id} product={product}/>
                )
                )}
        </div>
    );
}