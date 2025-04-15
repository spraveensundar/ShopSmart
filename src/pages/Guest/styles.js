import { StyleSheet } from "react-native";

import { colors, fonts, normalize, size, fontScale } from "../../helpers/variables";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: fontScale(24),
        marginBottom: size.xxx_small,
        textAlign: "center",
        fontFamily: fonts.poppinsBold,
        color: colors.orange
    },
    home: {
        width: normalize(400),
        height: normalize(400)
    }
});

export default styles;