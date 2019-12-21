import React, { useState } from 'react';
import CommonHeader from '../commons/CommonHeader';
import { ScrollView, Text, View, FlatList, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
//import CommonRadioButton from '../commons/CommonRadioButton';



1
import { RadioGroup } from 'react-native-btr';


const data = [
    {
        label: 'Ac-001(3 Pin Socket)',
        value: 'Apple',
        checked: true,

        color: 'green',
        disabled: false,
        flexDirection: 'row',


    },

    {
        label: 'DC-GB/T',
        value: 'Mango',
        checked: false,
        color: 'red',
        disabled: false,
        flexDirection: 'row',


    },

    {
        label: 'Type-2AC',
        value: 'Banana',
        checked: false,
        color: 'red',
        disabled: false,
        flexDirection: 'row',


    }

]



const Filter = () => {

    const [isSelected, setIsSalected] = useState(false);

    const [radioButtons, setRadioButtons] = useState(data);





    const rows = [
        { id: 0, text: 'Commercial', isTrue: true },
        { id: 1, text: 'Private', isTrue: false },
        { id: 2, text: 'Public', isTrue: false },

    ]
    const extractKey = ({ id }) => id


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



    // const rows1 = [
    //     { id: 0, text: 'Hotel' },
    //     { id: 1, text: 'Shoping Mall' },
    //     { id: 2, text: 'Office' },
    //     { id: 3, text: 'Multiplex' },
    //     { id: 4, text: 'Cafeteria' }
    // ]

    // const extractKey = ({id}) =>id









    return (

        <>
            <CommonHeader headerTitle={"Filter"} />
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

                    <View style={styles.MainContainer}>



                        <RadioGroup
                            color="green" // to change disable color go to library => radio button => border color => applie condition  {borderColor: props.checked ? props.color : '#dce1dc'}//

                            labelStyle={{ fontSize: 14, fontWeight: "bold", color: 'black' }}
                            radioButtons={radioButtons}
                            onPress={radioButtons => setRadioButtons(radioButtons)}

                        //style={{ paddingTop: 16, }}
                        />
                    </View>

                    <Text style={{ fontWeight: "bold", fontSize: 18, marginTop: 25 }}>Amenities</Text>








                </View>



            </ScrollView>


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
    MainContainer: {
        flex: 1,
        marginTop: 15
        // backgroundColor: '#FFF8E1',
        // justifyContent: 'left',
        // alignItems: 'center',
        // paddingTop: (Platform.OS) === 'ios' ? 20 : 0,

    },
})


export default Filter;