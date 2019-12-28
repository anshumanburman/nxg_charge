import React, { useState } from 'react';
import CommonHeader from '../commons/CommonHeader';
import { ScrollView, Text, View, FlatList, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-navigation'
import CustomButton from '../commons/CustomButton';
//import CommonRadioButton from '../commons/CommonRadioButton';

import * as Style from '../../styles';



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

];

const a = [
    {
        label: 'Fast',
        value: 'Apple',
        checked: true,

        color: 'green',
        disabled: false,
        flexDirection: 'row',


    },

    {
        label: 'Madurato',
        value: 'Mango',
        checked: false,
        color: 'red',
        disabled: false,
        flexDirection: 'row',


    },

    {
        label: 'Slow',
        value: 'Banana',
        checked: false,
        color: 'red',
        disabled: false,
        flexDirection: 'row',


    }

]




const Filter = ({navigation}) => {

    const [isSelected, setIsSalected] = useState(false);

    const [radioButtons, setRadioButtons] = useState(data);

    const [buttons, setButtons] = useState(a);







    const rows = [
        { id: 0, text: 'Commercial', isTrue: true },
        { id: 1, text: 'Private', isTrue: false },
        { id: 2, text: 'Public', isTrue: false },

    ]
    const extractKey = ({ id }) => id


    const renderItem = (item) => {
        return (
            <View style={{ height: 40, flexDirection: 'row', marginTop: 15, marginLeft: 15, borderRadius: 25, backgroundColor: "#dce1dc", justifyContent: "center" }}>
                {item.isTrue && <TouchableOpacity style={{ height: 25, width: 25, marginLeft: 7, backgroundColor: "green", borderRadius: 12, justifyContent: "center", marginTop: 8, opacity: 1 }}>
                    <Image style={{ height: 12, width: 12, marginLeft: 5, }} source={require('../../../assets/images/close.png')} />
                </TouchableOpacity>}
                <Text style={styles.row} >
                    {item.text}
                </Text>




            </View>
        )
    }



    const column = [
        { id: 0, text: 'Hotel', isTrue: true, },
        { id: 1, text: 'Shoping Mall', isTrue: false },
        { id: 2, text: 'Office', isTrue: false },
        { id: 3, text: 'Multiplex', isTrue: false },
        { id: 4, text: 'Cafeteria', isTrue: false }
    ]


    const renderValue = (item, index) => {
        return (


            <View key={index} style={{ height: 40, flexDirection: 'row', marginTop: 15, marginLeft: 15, borderRadius: 25, backgroundColor: item.isTrue ? "#00cc44" : "#dce1dc", justifyContent: "center" }}>
                {item.isTrue && <TouchableOpacity style={{ height: 25, width: 25, marginLeft: 7, backgroundColor: "#008000", borderRadius: 12, justifyContent: "center", marginTop: 8, opacity: 1 }}>
                    <Image style={{ height: 12, width: 12, marginLeft: 5, }} source={require('../../../assets/images/close.png')} />
                </TouchableOpacity>}
                <Text style={styles.row} >
                    {item.text}
                </Text>





            </View>

        )
    }









    return (

        <SafeAreaView>

            <CommonHeader headerTitle={"Filter"} navigation={navigation}/>
            <ScrollView contentContainerStyle={{ paddingVertical: 30 }}>



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


                        />
                    </View>

                    <Text style={{ fontWeight: "bold", fontSize: 18, marginTop: 25 }}>Amenities</Text>



                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginLeft: -15 }} >
                        {

                            column.map((item, index) => {
                                return renderValue(item, index)
                            })
                        }
                    </View>


                    <Text style={{ fontWeight: "bold", fontSize: 18, marginTop: 25 }}>Power/Speed Lavel</Text>



                    <RadioGroup
                        color="green" // to change disable color go to library => radio button => border color => applie condition  {borderColor: props.checked ? props.color : '#dce1dc'}//

                        labelStyle={{ fontSize: 14, fontWeight: "bold", color: 'black' }}
                        radioButtons={buttons}
                        onPress={radioButtons => setButtons(radioButtons)}


                    />


                    <View style={styles.btnBg} >
                        <Text style={styles.skip}>Reset</Text>
                        <CustomButton btnStyle={styles.signIn}
                            btnTitle="Apply" />
                    </View>





                </View>



            </ScrollView>


        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: -15



    },
    row: {

        padding: 15,
        fontSize: 15,
        fontWeight: "bold",
        marginTop: -7,
        marginLeft: -4,



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

    btnBg: {
        // backgroundColor:'yellow',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: Style.Mixins.scaleSize(15)
    },
    skip: {
        color: Style.Colors.GREEN_COLOR,
        fontFamily: Style.Typography.FONT_FAMILY_REGULAR,
        fontWeight: Style.Typography.FONT_WEIGHT_REGULAR,
        fontSize: Style.Typography.FONT_SIZE_16,
        textAlign: 'center',
        flex: 1
    },
    signIn: {
        width: Style.Mixins.scaleSize(135)
    }
})


export default Filter;