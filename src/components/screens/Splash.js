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
import {SafeAreaView} from 'react-navigation';
const {width,height}=Dimensions.get('window')

const Splash = (props)=> {
    let  _opacityAnimationValue = new Animated.Value(1);
    let _moveAnimationValue = new Animated.ValueXY({x:-90,y:-90});
    //let _moveAnimationValue1 = new Animated.ValueXY({x:width/2-100,y:height/2-50});
    let _moveAnimationValue1 = new Animated.ValueXY(0);
    let _moveAnimationValue2 = new Animated.Value(0);
    //let _moveAnimationValue3 = new Animated.ValueXY({x:-2500,y:height-380});
    let _moveAnimationValue3 = new Animated.ValueXY({x:-250,y:0});
    let _moveAnimationValue4 = new Animated.ValueXY({x:width,y:120});
    let SlideInLeft= new Animated.Value(0)
    useEffect(() => {
        // Update the document title using the browser API
       // document.title = `You clicked ${count} times`;
      
       


       Animated.sequence([
        Animated.timing(_moveAnimationValue, {
            toValue:0,
            duration: 800
        }),
        Animated.timing(_moveAnimationValue1, {
            toValue: 1,//{x:width/2-100,y:height/2-100},
            duration: 1000
        }),
        Animated.timing(_moveAnimationValue2, {
            toValue: 130,
            duration: 1500,
            easing: Easing.bounce,
            //useNativeDriver:true
        }),
        Animated.timing(_moveAnimationValue3, {
            toValue: {x:20,y:0},
            duration: 1000
        }),
        Animated.timing(_moveAnimationValue4, {
            toValue: {x:60,y:0},
            duration: 800
        })
    ]).start()
    

    setTimeout(() => {
         
         Style.AsyncStorage.getData(Style.Constants.KEY_USER_DETAILS).then((item)=>{
            //console.warn("global.item :::::: ",item);
            if (item) {
                let jsonData = JSON.parse(item);
                global.userID = jsonData.id;
                jsonData.id?props.navigation.navigate(Style.Constants.KEY_APP):props.navigation.navigate(Style.Constants.KEY_AUTH);
            }else{
                props.navigation.navigate(Style.Constants.KEY_AUTH)
            }
          })
     }, 6000);

     


      });
    return (
        <View style={styles.container}>
            <View>
        <Animated.View style={{backgroundColor:'green',opacity:0.30,height:137,width:120,...styles.j , transform: _moveAnimationValue.getTranslateTransform()}} />
        </View>
        
        <Animated.Image source={require('../../../assets/images/logo.png')} style={{resizeMode:'center',alignSelf:'center',height:_moveAnimationValue2,width:200,bottom:_moveAnimationValue2,marginTop:130, transform: _moveAnimationValue1.getTranslateTransform()}} />
        
       <View style={{flexDirection:'row',alignItems:'flex-end'}}>
        <Animated.Image source={require('../../../assets/images/vecter.png')} style={{resizeMode:'center',height:76,width:210, transform: _moveAnimationValue3.getTranslateTransform()}} />
        <Animated.View style={{backgroundColor:'green',opacity:0.30,height:115,width:93,...styles.K  ,transform: _moveAnimationValue4.getTranslateTransform()}} />
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor:'white',
        justifyContent:'space-between'
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