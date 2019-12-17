import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


import * as Style from '../../styles'
import { Dropdown } from 'react-native-material-dropdown';



const commonDropDown = (props) => {
    const { labelName, style } = props;
    return (

        <View style={[styles.container, style]}>


            <Dropdown
                label={labelName}


            // data={data}
            />


        </View>

    )
}


const styles = StyleSheet.create({


    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10
    },
    text: {
        color: Style.Colors.WHITE,
        fontSize: Style.Typography.FONT_SIZE_18
    },

    container: {
        backgroundColor: Style.Colors.TXT_BG_COLOR,
        height: Style.Spacing.SCALE_45,
        paddingLeft: Style.Spacing.SCALE_8,
        paddingRight: Style.Spacing.SCALE_8,
        borderWidth: 1,
        borderColor: Style.Colors.TXT_BORDER_COLOR,
        marginLeft: Style.Spacing.SCALE_30,
        marginRight: Style.Spacing.SCALE_30,
        justifyContent: 'center',
        borderRadius: Style.Spacing.SCALE_3
    },



})

export default commonDropDown;