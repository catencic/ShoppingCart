

export  interface ProductContextProps {
   products: ProductProps[],
   cartState: CartState,
   dispatch: React.Dispatch<any>
   filtersState: FiltersContextProps,
   dispatchFilters: React.Dispatch<any>
}

export interface FiltersContextProps {
    sort: string,
    byStock: boolean;
    byFastDelivery: boolean;
    byRating: number;
    searchQuery: string;
}

export  interface ProductProps {

    id: string;
    name: string;
    price: string;
    image: string;
    inStock: number;
    fastDelivery: boolean;
    ratings: number;
    qty?: number;
}

export interface CartState {
    products: ProductProps[],
    cart: []
}
