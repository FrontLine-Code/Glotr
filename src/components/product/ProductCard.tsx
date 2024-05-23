import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../api/productService';


interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.imageUrl} alt={product.name} className="product-image" />
      <h2 className="product-name">{product.name}</h2>
      <p className="product-price">${product.price.toFixed(2)}</p>
      <Link to={`/products/${product.id}`} className="product-link">
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;