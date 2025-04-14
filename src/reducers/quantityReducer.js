
const defaultState = {
    products: [],
    wishlistItems: []
};

export default function quantityReducer(state = defaultState, action) {
    switch (action.type) {
        case 'ADD_TO_BAG': {
            const data = action.payload.item;
            let d = state.products;
            if (data) {
                const itemIndex = state.products.findIndex(item => item.id === data.id);
                if (itemIndex === -1) {
                    d = [
                        ...d,
                        {
                            ...data,
                            quantity: 1
                        }
                    ];
                }
            }
            return {
                ...state,
                products: d
            };
        }
        case 'REMOVE_BAG_ITEM': {
            const data = action.payload;
            let d = state.products;
            if (data) {
                const itemIndex = state.products.findIndex(item => item.id === data.id);
                if (itemIndex > -1) {
                    d = d.filter(item => item.id !== data.id);
                }
                return {
                    ...state,
                    products: d
                }
            }
        }
        case 'EMPTY_BAG_ITEM': {
            return {
                ...state,
                products: []
            }
        }
        case 'INCREMENT':
            return {
                ...state,
                products: state.products.map((item) => {
                    if (item.id === action.payload) {
                        return {
                            ...item,
                            quantity: item.quantity + 1
                        }
                    }
                    return item
                })
            };
        case 'DECREMENT':
            return {
                ...state,
                products: state.products
                    .map((item) => {
                        if (item.id === action.payload) {
                            return {
                                ...item,
                                quantity: item.quantity - 1
                            };
                        }
                        return item;
                    }).filter(item => item.quantity > 0)
            };
        case 'UPDATE_WISHLIST': {
            const data = action.payload;
            const wishlistItems = state.wishlistItems;
            let d = state.wishlistItems;
            if (data) {
                const itemIndex = wishlistItems.findIndex(item => item.id === data.id);
                if (itemIndex === -1) {
                    d = [...d, data];
                }
                else if (itemIndex > -1) {
                    d = wishlistItems.filter(item => item.id !== data.id);
                }
            }
            return {
                ...state,
                wishlistItems: d
            }
        }
        default:
            return state;
    }
};