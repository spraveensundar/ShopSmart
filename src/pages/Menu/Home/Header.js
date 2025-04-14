import React from 'react';
import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Icon from '../../../components/Icon';
import { navigate } from '../../../helpers/navigation';
import { colors, size } from '../../../helpers/variables';

import styles from './styles';

const Header = () => {
    const insets = useSafeAreaInsets();
    return (
        <View style={{ paddingTop: insets.top }}>
            <View style={styles.header}>
                <View style={styles.leftContainer}>
                    <Text>Foody</Text>
                </View>
                <View style={styles.rightContainer}>
                    <View style={{ flexDirection: "row" }}>
                        <View style={{ paddingLeft: size.small }}>
                            <Icon
                                icon="cart"
                                size={size.regular}
                                color={colors.white}
                                containerStyle={styles.card}
                                onPress={() => navigate("cart")}
                            />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Header