// types/api.ts

import { User, Product } from "./models";

export interface UserResponse {
  data: User;
  status: string;
}

export interface ProductResponse {
  data: Product[];
  status: string;
}
