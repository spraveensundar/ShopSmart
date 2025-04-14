
export function addToBag(item) {
    return {
        type: "ADD_TO_BAG",
        payload: { item }
    };
}

export function removeBagItem(item) {
    return {
        type: "REMOVE_BAG_ITEM",
        payload: item
    };
}

export function emptyBagItem() {
    return {
        type: "EMPTY_BAG_ITEM"
    };
}

export function increment(item) {
    return {
        type: "INCREMENT",
        payload: item
    };
}

export function decrement(item) {
    return {
        type: "DECREMENT",
        payload: item
    };
}

export const updateWishlist = (item) => ({
    type: 'UPDATE_WISHLIST',
    payload: item,
});