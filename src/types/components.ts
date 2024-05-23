// types/components.ts

import { Product } from "./models";

export interface ProductCardProps {
  product: Product;
}

export interface ButtonProps {
  label: string;
  onClick: () => void;
}
