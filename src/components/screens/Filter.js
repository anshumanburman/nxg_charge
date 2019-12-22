import React, { useState } from 'react';
import CommonHeader from '../commons/CommonHeader';
import { ScrollView, Text, View, FlatList, StyleSheet, Image,TouchableOpacity } from 'react-native';
import {SafeAreaView} from 'react-navigation';





const Filter = ({navigation}) => {

    const [isSelected, setIsSalected] = useState(false);


    // onClick={() => setIsCheked(!isChecked)

    // }

    const rows = [
        { id: 0, text: 'Commercial', isTrue: true },
        { id: 1, text: 'Private', isTrue: false },
        { id: 2, text: 'Public', isTrue: false },

    ]
    const extractKey = ({ id }) => id.toString()


    const renderItem = (item) => {
        return (
            
            <View style={{ height: 40, flexDirection: 'row', marginTop: 15, marginLeft: 10, borderRadius: 25, backgroundColor: "#dce1dc", justifyContent: "center" }}>
                {item.isTrue && <TouchableOpacity style={{ height: 25, width: 25, marginLeft: 7, backgroundColor: "green", borderRadius: 12, justifyContent: "center", marginTop: 8, opacity: 1 }}>
                    <Image style={{ height: 12, width: 12, marginLeft: 5, }} source={require('../../../assets/images/close.png')} />
                </TouchableOpacity>}
                <Text style={styles.row} >
                    {item.text}
                </Text>




            </View>
        )
    }

    return (

        <>
        <SafeAreaView style={{flex:1}}>
            <CommonHeader headerTitle={"Filter"} navigation={navigation}/>
            <ScrollView style={{ marginTop: 15 }}>



                <View style={{ marginTop: 15, marginLeft: 15 }}>
                    <Text style={{ fontWeight: "bold", fontSize: 18 }}>Access Type</Text>

                    <FlatList
                        horizontal={true}

                        style={styles.container}
                        data={rows}
                        renderItem={({ item, index }) => renderItem(item, index)}
                        keyExtractor={extractKey}
                    />
                    <Text style={{ fontWeight: "bold", fontSize: 18, marginTop: 25 }}>Connector Type</Text>


                </View>



            </ScrollView>

            </SafeAreaView>
        </>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    row: {

        padding: 15,
        fontSize: 15,
        fontWeight: "bold",
        marginTop: -7,
        marginLeft: -4

        // marginBottom: 5,
        // backgroundColor: 'skyblue',

    },
})


export default Filter;