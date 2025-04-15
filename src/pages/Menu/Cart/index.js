import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { increment, decrement } from '../../../actions/quantity';

import Icon from '../../../components/Icon';
import Container from '../../../components/container';
import { productDetails } from '../../../helpers/list';
import { colors, normalize, size } from '../../../helpers/variables';

import styles from './styles';

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.products);

    const getTotalAmount = () => {
        return cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0);
    };

    const renderItem = ({ item }) => {
        const { background } = productDetails(item.name);
        return (
            <View style={styles.itemContainer}>
                <View style={{ width: normalize(150) }}>
                    <View style={styles.itemDetails}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.price}>₹{item.price} x {item.quantity} = ₹{item.price * item.quantity}</Text>
                    </View>
                    <View style={styles.qtyControls}>
                        <Icon
                            icon={"remove"}
                            color={colors.white}
                            size={size.normal}
                            onPress={() => dispatch(decrement(item.id))}
                        />
                        <Text style={styles.qtyText}>{item.quantity}</Text>
                        <Icon
                            icon={"add"}
                            color={colors.white}
                            size={size.normal}
                            onPress={() => dispatch(increment(item.id))}
                        />
                    </View>
                </View>
                <Image source={background} style={styles.bg} resizeMode="contain" />
            </View>
        )
    };

    return (
        <Container style={styles.container}>
            {
                cartItems.length === 0 ? (
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


export default Cart;