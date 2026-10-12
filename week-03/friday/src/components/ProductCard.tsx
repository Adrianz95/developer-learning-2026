
import type { ProductCardProps } from "../types/Product";

export function ProductCard({product}: ProductCardProps) {
    return (
        <div className="product-card">
            <p className="product-name">{product.name}</p>
            <span className="product-price">{product.price} €</span>
        </div>
    );
}