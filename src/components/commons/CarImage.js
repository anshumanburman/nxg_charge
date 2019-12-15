import React from 'react';
import {
    View,
    Image,
    StyleSheet
} from 'react-native';
import * as Style from '../../styles';

const CarLogo = () => <Image style={styles.img} source={require('../../../assets/images/vecter.png')}/>;


const styles = StyleSheet.create({
    img : {
//width: Style.Mixins.scaleSize(242),
//height:Style.Mixins.scaleSize(87),
//backgroundColor:'red',
resizeMode:'center'
    }
})
export default CarLogo;