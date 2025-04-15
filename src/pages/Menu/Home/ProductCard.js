import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { addToBag, decrement, increment } from '../../../actions/quantity';

import Liked from './Liked';
import Icon from '../../../components/Icon';
import { productDetails } from '../../../helpers/list';
import { colors, fontScale, normalize, size } from '../../../helpers/variables';

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.products);
    const cartItem = cartItems.find(item => item.id === product.id);
    const { background, price, offer, mrp } = productDetails(product.name);
    const category = product.main_category || 'Uncategorized';
    const quantity = cartItem ? cartItem.quantity : 0;
    const totalPrice = quantity > 0 ? quantity * price : price;
    return (
        <View style={{ margin: size.xx_tiny }}>
            <View style={styles.card}>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <View style={{ backgroundColor: "green", padding: size.tiny, paddingHorizontal: size.small, borderBottomRightRadius: size.xx_tiny, borderTopLeftRadius: size.xx_tiny, top: -2, left: -1 }}>
                        <Text style={{ color: colors.white, fontSize: fontScale(16), fontWeight: "500" }}>{offer}% off</Text>
                    </View>
                    <Liked product={product} />
                </View>
                <View style={{ alignItems: "center" }}>
                    <Image source={background} style={{ width: normalize(170), height: normalize(170) }} resizeMode="cover" />
                </View>
                {
                    cartItem ? (
                        <View style={styles.qtyContainer}>
                            <Icon
                                icon={"remove"}
                                color={colors.white}
                                size={size.xx_normal}
                                onPress={() => dispatch(decrement(product.id))}
                            />
                            <Text style={styles.qtyText}>{cartItem.quantity}</Text>
                            <Icon
                                icon={"add"}
                                color={colors.white}
                                size={size.xx_normal}
                                onPress={() => dispatch(increment(product.id))}
                            />
                        </View>
                    ) : (
                        <View style={{ width: normalize(100), position: "absolute", bottom: -10, right: -22 }}>
                            <Pressable style={{ width: normalize(80), borderRadius: size.small, height: size.big, borderColor: "green", borderWidth: 2, alignItems: "center", justifyContent: "center", backgroundColor: colors.white }} onPress={() => dispatch(addToBag({ ...product, price }))}>
                                <Text style={{ fontSize: fontScale(16), color: "green", fontWeight: "500" }}>Add</Text>
                            </Pressable>
                        </View>
                    )
                }
            </View>
            <View style={{ width: normalize(200), paddingTop: size.small }}>
                <Text style={styles.category}>{category}</Text>
                <View style={{ paddingVertical: size.two }}>
                    <Text style={styles.name}>{product.name}</Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={styles.price}>₹{totalPrice}</Text>
                    <Text style={{ textDecorationLine: "line-through", paddingLeft: size.xx_tiny, color: "#888" }}>₹{mrp}</Text>
                </View>
            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    card: {
        position: "relative",
        width: normalize(200),
        borderWidth: 1,
        borderRadius: size.tiny,
        borderColor: '#ddd'
    },
    name: {
        fontSize: fontScale(14),
        fontWeight: 'bold',
        color: "green",
        lineHeight: fontScale(20)
    },
    category: {
        fontSize: fontScale(14),
    },
    price: {
        fontSize: fontScale(16)
    },
    qtyContainer: {
        width: normalize(120),
        position: "absolute",
        bottom: -10,
        right: 0,
        backgroundColor: "green",
        borderRadius: 15,
        height: size.big,
        borderColor: "green",
        borderWidth: 2,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        paddingHorizontal: size.tiny
    },
    qtyText: {
        marginHorizontal: size.five,
        fontSize: fontScale(22),
        color: colors.white
    }
});

export default ProductCard;
