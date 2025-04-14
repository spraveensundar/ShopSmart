import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { addToBag, decrement, increment, updateWishlist } from '../../../actions/quantity';

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.products);
    const cartItem = cartItems.find(item => item.id === product.id);
    const price = 90;
    const category = product.main_category || 'Uncategorized';
    const quantity = cartItem ? cartItem.quantity : 0;
    const totalPrice = quantity > 0 ? quantity * price : price;
    const wishlistItems = useSelector(state => state.cart.wishlistItems);
    const isWishlisted = wishlistItems.some(item => item.id === product.id);

    return (
        <View style={styles.card}>
            <Text style={styles.name}>{product.name}</Text>
            <Text style={styles.category}>{category}</Text>
            <Text style={styles.price}>₹{totalPrice}</Text>
            <Button
                title={isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
                onPress={() => dispatch(updateWishlist(product))}
            />
            {cartItem ? (
                <View style={styles.qtyContainer}>
                    <Button title="−" onPress={() => dispatch(decrement(product.id))} />
                    <Text style={styles.qtyText}>{cartItem.quantity}</Text>
                    <Button title="+" onPress={() => dispatch(increment(product.id))} />
                </View>
            ) : (
                <Button title="Add to Cart" onPress={() => dispatch(addToBag({ ...product, price }))} />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        padding: 15,
        margin: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#111'
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    category: {
        fontSize: 14,
        color: 'gray'
    },
    price: {
        marginVertical: 5,
        fontSize: 16
    },
    qtyContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },
    qtyText: {
        marginHorizontal: 10,
        fontSize: 16
    }
});

export default ProductCard;
