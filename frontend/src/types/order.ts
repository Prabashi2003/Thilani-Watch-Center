interface IOrderItem {
  watchId: string;
  quantity: number;
  price: number;
}


export interface IOrder{
  _id: string;
  userId: string;
  watches: IOrderItem[];
  totalPrice: number;
  status: "Pending" | "Shipped" | "Delivered" | "Cancelled";
  createdAt: string;
  updatedAt?: string;
}
