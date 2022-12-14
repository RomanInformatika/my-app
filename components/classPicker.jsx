import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setClassName } from '../redux/filterSlice'

export const ClassPicker = () => {
    const setClassD = useDispatch()
    const [ className, setClassNameh ] = useState('')
    const ClassNameS=useSelector(state=>state.filter.className)

    const onChangeText = (text) => {
        setClassNameh(text)
    }
    
    useEffect(()=>{
        setClassD(setClassName(className))

    },[className])    
    
    useEffect(()=>{
        setClassNameh(ClassNameS)

    },[])

    //   const [selectedValue, setSelectedValue] = useState();
    return (

        <View style={styles.container}>
            <Text style={styles.caption}>Выберите класс</Text>
            <TextInput style={styles.input}
                onChangeText={onChangeText}
                value={className}

            />


        </View>
    )
}

const styles = StyleSheet.create({
    container: {

        flexDirection: 'column',
        paddingTop: 5,
        justifyContent: 'center',
        width: '100%',
        backgroundColor: '#bee8ff',
        alignItems: 'center',
    },
    caption: {
        fontSize: 20,
        fontWeight: 'bold',


    },
    input: {
        // flex:2,
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: '25%',
        fontSize: 18,
    },
});

