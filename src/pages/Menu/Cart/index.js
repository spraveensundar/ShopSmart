import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import Container from '../../../components/container';
import { increment, decrement } from '../../../actions/quantity';

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.products);

    const getTotalAmount = () => {
        return cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0);
    };

    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <View style={styles.itemDetails}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.price}>₹{item.price} x {item.quantity} = ₹{item.price * item.quantity}</Text>
            </View>
            <View style={styles.qtyControls}>
                <Button title="−" onPress={() => dispatch(decrement(item.id))} />
                <Text style={styles.qtyText}>{item.quantity}</Text>
                <Button title="+" onPress={() => dispatch(increment(item.id))} />
            </View>
        </View>
    );

    return (
        <Container style={styles.container}>
            {cartItems.length === 0 ? (
                <Text style={styles.emptyText}>Your cart is empty.</Text>
            ) : (
                <>
                    <FlatList
                        data={cartItems}
                        renderItem={renderItem}
                        keyExtractor={item => item.id.toString()}
                        contentContainerStyle={styles.list}
                    />
                    <View style={styles.totalContainer}>
                        <Text style={styles.totalText}>Total Payable: ₹{getTotalAmount()}</Text>
                    </View>
                </>
            )}
        </Container>
    );
};

const styles = StyleSheet.create({
    list: {
        paddingBottom: 20,
    },
    itemContainer: {
        padding: 15,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
    },
    itemDetails: {
        marginBottom: 10,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    price: {
        fontSize: 16,
        color: '#333',
    },
    qtyControls: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    qtyText: {
        marginHorizontal: 10,
        fontSize: 16,
    },
    totalContainer: {
        padding: 15,
        borderTopWidth: 1,
        borderColor: '#ccc',
    },
    totalText: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'right',
    },
    emptyText: {
        fontSize: 18,
        textAlign: 'center',
        marginTop: 50,
        color: 'gray',
    }
});

export default Cart;