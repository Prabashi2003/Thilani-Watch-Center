interface CartItem {
  watchId: string;
  quantity: number;
}

// TypeScript interface for Cart document
export interface Cart {
  userId: string;
  items: CartItem[];
  createdAt: string;
  updatedAt?: string;
}