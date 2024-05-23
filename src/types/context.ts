// types/context.ts

import { User } from "./models";

export interface AuthContextProps {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export interface ProductContextProps {
  fetchProducts: () => Promise<void>;
}
