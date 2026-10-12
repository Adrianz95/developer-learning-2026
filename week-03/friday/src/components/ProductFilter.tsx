import { useMemo, useState } from "react";

import type { ProductListProps } from "../types/Product";
import { ProductList } from "./ProductList";


export function ProductFilter({ products }: ProductListProps) {

    const [maxPrice, setMaxPrice] = useState(0);

    const filteredProducts = useMemo(() => {
        return products.filter((product) => product.price <= maxPrice);
    }, [products, maxPrice]);

    return (
        <div>
            {/* 3. Input controlado conectado al estado */}
            <div style={{ marginBottom: '20px', textAlign: 'center' }}>
                <input 
                    type="number" 
                    name="maxPrice" 
                    id="maxPrice"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                    placeholder="Filtra precio máximo..."
                />
            </div>

            {/* 4. Mostramos la lista con los productos ya filtrados */}
            <ProductList products={filteredProducts} />
        </div>
    );
}