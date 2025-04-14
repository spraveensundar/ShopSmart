import React from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { updateWishlist } from '../../../actions/quantity';

const Wishlist = () => {
    const dispatch = useDispatch();
    const wishlistItems = useSelector(state => state.cart.wishlistItems);

    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.category}>{item.main_category || 'Uncategorized'}</Text>
            <Text style={styles.price}>₹{item.price}</Text>
            <Button
                title="Remove from Wishlist"
                onPress={() => dispatch(updateWishlist(item))}
            />
        </View>
    );

    return (
        <View style={styles.container}>
            {wishlistItems.length === 0 ? (
                <Text style={styles.emptyText}>Your wishlist is empty.</Text>
            ) : (
                <FlatList
                    data={wishlistItems}
                    renderItem={renderItem}
                    keyExtractor={item => item.id.toString()}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: '#fff',
    },
    itemContainer: {
        padding: 15,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    category: {
        fontSize: 14,
        color: 'gray',
    },
    price: {
        fontSize: 16,
        marginVertical: 5,
    },
    emptyText: {
        fontSize: 18,
        textAlign: 'center',
        marginTop: 50,
        color: 'gray',
    },
});

export default Wishlist;

