export interface Iuser {
  _id: string;
  name: string;
  email: string;
  password: string;
  role: "admin" | "customer";
  createdAt: string;
  updatedAt: string;
}
