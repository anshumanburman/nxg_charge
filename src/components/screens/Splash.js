import React,{useEffect} from 'react';
import {
    View,
    StyleSheet,
    Text,
    Animated,
    Dimensions,
    Easing,
    Image
} from 'react-native';
import * as Style from '../../styles';
const {width,height}=Dimensions.get('window')

const Splash = (props)=> {
    let  _opacityAnimationValue = new Animated.Value(1);
    let _moveAnimationValue = new Animated.ValueXY({x:-90,y:-90});
    let _moveAnimationValue1 = new Animated.ValueXY({x:width/2-100,y:height/2-50});
    let _moveAnimationValue2 = new Animated.Value(0);
    let _moveAnimationValue3 = new Animated.ValueXY({x:-2500,y:height-380});
    let _moveAnimationValue4 = new Animated.ValueXY({x:width,y:height});
    let SlideInLeft= new Animated.Value(0)
    useEffect(() => {
        // Update the document title using the browser API
       // document.title = `You clicked ${count} times`;
      
       


       Animated.sequence([
        Animated.timing(_moveAnimationValue, {
            toValue:0,
            duration: 1000
        }),
        Animated.timing(_moveAnimationValue1, {
            toValue: {x:width/2-100,y:height/2-100},
            duration: 1000
        }),
        Animated.timing(_moveAnimationValue2, {
            toValue: 100,
            duration: 2000,
            easing: Easing.bounce,
            //useNativeDriver:true
        }),
        Animated.timing(_moveAnimationValue3, {
            toValue: {x:30,y:height-295},
            duration: 3000
        }),
        Animated.timing(_moveAnimationValue4, {
            toValue: {x:width-90,y:height-405},
            duration: 1000
        }),
    ]).start()

    setTimeout(() => {
         props.navigation.navigate(Style.Constants.KEY_AUTH);
     }, 9000);

      });
    return (
        <View style={styles.container}>
        <Animated.View style={{backgroundColor:'green',height:137,width:120,...styles.j , transform: _moveAnimationValue.getTranslateTransform()}} />
        <Animated.Image source={require('../../../assets/images/logo.png')} style={{resizeMode:'center',height:_moveAnimationValue2,width:200,bottom:_moveAnimationValue2, transform: _moveAnimationValue1.getTranslateTransform()}} />
        <Animated.Image source={require('../../../assets/images/vecter.png')} style={{resizeMode:'center',height:76,width:210, transform: _moveAnimationValue3.getTranslateTransform()}} />
        <Animated.View style={{backgroundColor:'green',height:115,width:93, ...styles.K  ,transform: _moveAnimationValue4.getTranslateTransform()}} />
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor:'white'
    },
    j : {
       
        borderTopRightRadius:0,
        borderBottomRightRadius:130,
        borderBottomLeftRadius:-20
        
    },
    K:{
        borderTopLeftRadius:100
    }
})

export default Splash;