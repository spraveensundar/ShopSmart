import React from 'react';
import { StatusBar, View } from 'react-native';

import Header from './Header';
import { colors } from '../../helpers/variables';

import styles from './styles';

const Container = (props) => {
    const {
        children,
        title,
        backgroundColor = colors.white,
        leftIcon,
        rightIcon,
        header = true,
        style
    } = props;

    return (
        <View style={[styles.container, { backgroundColor }]}>
            <StatusBar
                barStyle="dark-content"
                backgroundColor={colors.white}
                translucent={true}
            />
            {
                header !== false && (
                    <Header
                        title={title}
                        leftIcon={leftIcon}
                        rightIcon={rightIcon}
                    />
                )
            }
            <View style={[styles.content, style]}>
                {children}
            </View>
        </View>
    )
}

export default Container;