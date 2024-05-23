import React from 'react';
import ProductCard from './ProductCard';
import { useProducts } from '../../hooks/useProducts';

export const ProductList: React.FC = () => {
  const { products, loading, error } = useProducts();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
