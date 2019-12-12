import React,{useEffect} from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';


const Splash = (props)=> {
    useEffect(() => {
        // Update the document title using the browser API
       // document.title = `You clicked ${count} times`;
       setTimeout(() => {
           props.navigation.navigate('lgn');
       }, 5000);
      });
    return (
        <View style={styles.container}><Text>Splash</Text></View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor:'yellow'
    }
})

export default Splash;