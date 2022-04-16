export enum ActionTypes {
  ADD_PRODUCT_TO_CART_REQUEST = 'ADD_PRODUCT_TO_CART_REQUEST',
  ADD_PRODUCT_TO_CART_SUCCESS = 'ADD_PRODUCT_TO_CART_SUCCESS',
  ADD_PRODUCT_TO_CART_FAILURE = 'ADD_PRODUCT_TO_CART_FAILURE',
}

export type Product = {
  id: number;
  title: string;
  price: number;
}

export type CartItem = {
  product: Product;
  quantity: number;
}

export type CartState = {
  items: CartItem[];
  failedStockCheck: number[];
}