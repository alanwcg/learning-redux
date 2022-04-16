import { useEffect, useState } from 'react';

import { api } from '../services/api';

import { Product } from '../store/modules/cart/types';
import { CatalogItem } from './CatalogItem';

export function Catalog() {
  const [catalog, setCatalog] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await api.get('/products');
      setCatalog(response.data);
    }

    fetchProducts();
  });

  return (
    <main>
      <h1>Catalog</h1>

      {catalog.map(product => (
        <CatalogItem key={product.id} product={product} />
      ))}
    </main>
  );
}
