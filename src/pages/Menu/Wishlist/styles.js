import { StyleSheet } from "react-native";

import { colors, fontScale, normalize, size } from "../../../helpers/variables";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: size.small,
        backgroundColor: colors.white,
    },
    itemContainer: {
        padding: size.small,
        marginBottom: size.xx_tiny,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: size.xx_tiny,
    },
    name: {
        fontSize: fontScale(18),
        fontWeight: 'bold',
    },
    category: {
        fontSize: fontScale(14),
        color: 'gray',
    },
    price: {
        fontSize: fontScale(16),
        marginVertical: 5,
    },
    emptyText: {
        fontSize: fontScale(18),
        textAlign: 'center',
        marginTop: size.big,
        color: 'gray',
    },
    bg: {
        width: normalize(100),
        height: normalize(100)
    }
})

export default styles;