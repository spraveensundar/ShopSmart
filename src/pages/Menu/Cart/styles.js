import { StyleSheet } from "react-native";

import { colors, fontScale, normalize, size } from "../../../helpers/variables";

const styles = StyleSheet.create({
    container: {
        paddingBottom: size.xx_normal
    },
    list: {
        paddingBottom: size.xxx_small,
    },
    itemContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: size.small,
        marginBottom: size.xx_tiny,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: size.xx_tiny,
    },
    itemDetails: {
        marginBottom: size.xx_tiny,
    },
    bg: {
        width: normalize(150),
        height: normalize(150)
    },
    name: {
        fontSize: fontScale(18),
        fontWeight: 'bold',
    },
    price: {
        fontSize: fontScale(18),
        paddingVertical: size.xx_tiny,
        color: '#333',
    },
    qtyControls: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: colors.orange,
        width: normalize(100),
        height: 40,
        borderRadius: 3,
    },
    qtyText: {
        marginHorizontal: size.xx_tiny,
        fontSize: fontScale(18),
        color: colors.white
    },
    totalContainer: {
        padding: size.small,
        borderTopWidth: 1,
        borderColor: '#ccc',
    },
    totalText: {
        fontSize: fontScale(18),
        fontWeight: 'bold',
        textAlign: 'right',
    },
    emptyText: {
        fontSize: fontScale(18),
        textAlign: 'center',
        marginTop: size.big,
        color: 'gray',
    }
})

export default styles;