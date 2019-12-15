import React from 'react';
import {
    View,
    TextInput,
    StyleSheet
} from 'react-native';
import * as Style from '../../styles' 

const CommonTextInput = (props)=> {
const {placeholder,txtStyle} = props
    return(
       
        <View style={[styles.container,txtStyle]}>
    
        <TextInput style={styles.txtInput,Style.Typography.FONT_REGULAR} placeholder={placeholder}/>
        </View>
        
    );
} 

const styles = StyleSheet.create({
    container : {
        backgroundColor:Style.Colors.TXT_BG_COLOR,
        height: Style.Spacing.SCALE_45,
        paddingLeft:Style.Spacing.SCALE_8,
        paddingRight:Style.Spacing.SCALE_8,
        borderWidth:1,
        borderColor :Style.Colors.TXT_BORDER_COLOR,
        marginLeft:Style.Spacing.SCALE_30,
        marginRight:Style.Spacing.SCALE_30,
        justifyContent:'center',
        borderRadius:Style.Spacing.SCALE_3
    },
    txtInput : {
        flex:1,
        backgroundColor:Style.Colors.TRANSPARENT,
        
        
    }
})


export default CommonTextInput;