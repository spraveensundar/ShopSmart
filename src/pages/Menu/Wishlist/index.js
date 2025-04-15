import React from 'react';
import { View, Text, FlatList, Button, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import Container from '../../../components/container';
import { updateWishlist } from '../../../actions/quantity';

import styles from './styles';
import { productDetails } from '../../../helpers/list';

const Wishlist = () => {
    const dispatch = useDispatch();
    const wishlistItems = useSelector(state => state.cart.wishlistItems);

    const renderItem = ({ item }) => {
        const { background, price } = productDetails(item.name);
        return (
            <View style={styles.itemContainer}>
                <Image source={background} style={styles.bg} />
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.category}>{item.main_category || 'Uncategorized'}</Text>
                <Text style={styles.price}>₹{price}</Text>
                <Button
                    title="Remove from Wishlist"
                    onPress={() => dispatch(updateWishlist(item))}
                />
            </View>
        )
    };

    return (
        <Container>
            {wishlistItems.length === 0 ? (
                <Text style={styles.emptyText}>Your wishlist is empty.</Text>
            ) : (
                <FlatList
                    data={wishlistItems}
                    renderItem={renderItem}
                    keyExtractor={item => item.id.toString()}
                />
            )}
        </Container>
    );
};


export default Wishlist;