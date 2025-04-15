import React from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { updateWishlist } from '../../../actions/quantity';

import Icon from '../../../components/Icon';
import { colors, size } from '../../../helpers/variables';

const Liked = ({ product }) => {
    const dispatch = useDispatch();
    const wishlistItems = useSelector(state => state.cart.wishlistItems);
    const isWishlisted = wishlistItems.some(item => item.id === product.id);

    return (
        <View style={{ paddingRight: size.five }}>
            <Icon
                color={colors.red}
                size={size.xx_normal}
                icon={isWishlisted ? 'heart' : 'heart-outline'}
                onPress={() => dispatch(updateWishlist(product))}
            />
        </View>
    )
}

export default Liked;