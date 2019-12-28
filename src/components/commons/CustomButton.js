import React from 'react';
import {
    View,
    TouchableOpacity,
    StyleSheet,
    Text,Image
} from 'react-native';
import * as Style from '../../styles'

const CustomButton = (props) => {
    const { placeholder, btnStyle, btnTitle, onPress,image } = props
    return (



        <TouchableOpacity style={[styles.btn, btnStyle, Style.Mixins.boxShadow('black')]} onPress={onPress}>
           {image ? <Image source={image} style={{resizeMode:'center'}}/>: <Text style={[styles.text, Style.Typography.FONT_REGULAR]}>{btnTitle}</Text>}
        </TouchableOpacity>


    );
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: Style.Colors.GREEN_COLOR,
        height: Style.Mixins.scaleSize(55),
        marginRight: Style.Mixins.scaleSize(30),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: Style.Spacing.SCALE_3,

    },
    text: {
        color: Style.Colors.WHITE,
        fontSize: Style.Typography.FONT_SIZE_18
    }
})

export default CustomButton;