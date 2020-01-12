import React,{useEffect} from 'react';
import {
    View,
    StyleSheet,
    Text,
    Animated,
    Dimensions,
    Easing
} from 'react-native';
import * as Style from '../../styles';
const {width,height}=Dimensions.get('screen')

const Splash = (props)=> {
    let  _opacityAnimationValue = new Animated.Value(1);
    let _moveAnimationValue = new Animated.ValueXY({x:-50,y:-50});
    let _moveAnimationValue1 = new Animated.ValueXY({x:width/2-100,y:height/2-50});
    let _moveAnimationValue2 = new Animated.Value(0);
    let _moveAnimationValue3 = new Animated.ValueXY({x:-200,y:height-380});
    let _moveAnimationValue4 = new Animated.ValueXY({x:width,y:height});
    let SlideInLeft= new Animated.Value(0)
    useEffect(() => {
        // Update the document title using the browser API
       // document.title = `You clicked ${count} times`;
       setTimeout(() => {
          // props.navigation.navigate(Style.Constants.KEY_AUTH);
       }, 5000);
       


       Animated.sequence([
        Animated.timing(_moveAnimationValue, {
            toValue: 0,
            duration: 2000
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
            toValue: {x:50,y:height-380},
            duration: 2000
        }),
        Animated.timing(_moveAnimationValue4, {
            toValue: {x:width-200,y:height-480},
            duration: 2000
        }),
    ]).start()

      });
    return (
        <View style={styles.container}><Text>Splash</Text>
        <Animated.View style={{backgroundColor:'green',height:100,width:200, transform: _moveAnimationValue.getTranslateTransform()}} />
        <Animated.View style={{backgroundColor:'red',height:_moveAnimationValue2,width:200,bottom:_moveAnimationValue2, transform: _moveAnimationValue1.getTranslateTransform()}} />
        <Animated.View style={{backgroundColor:'pink',height:150,width:150, transform: _moveAnimationValue3.getTranslateTransform()}} />
        <Animated.View style={{backgroundColor:'blue',height:100,width:200, transform: _moveAnimationValue4.getTranslateTransform()}} />
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor:'white'
    },
    j : {
        alignSelf:'center',
        
    }
})

export default Splash;