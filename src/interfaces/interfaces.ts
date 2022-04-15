

export  interface ProductContextProps {
   products: ProductProps[],
   cartState: CartState,
   dispatch: React.Dispatch<any>
}

export  interface ProductProps {

    id: string;
    name: string;
    price: string;
    image: string;
    inStock: number;
    fastDelivery: boolean;
    ratings: number;
}

export interface CartState {
    products: ProductProps[],
    cart: []
}
