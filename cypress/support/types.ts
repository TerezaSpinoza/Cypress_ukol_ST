export interface Product {
  code: string;
  name: string;
  url: string;
  price: number;
  registeredDiscount?: number;
  couponEnabled?: boolean;
}