import React, { useState } from 'react'
import { View,Text, StyleSheet } from 'react-native';
import { Avatar, Card} from 'react-native-paper';
import TxtInput from '../TextInput/TxtInput';
import Button from '../Button/Btn';
import dateFormat from "dateformat";
import { capitalize } from 'lodash';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

export default function Cad() {

    const [nic,setNic]= useState("")
    const [bday,setBday]= useState("")
    const [gender,setGender]= useState("")
    const [age,setAge]= useState("")

    const search = () => {
       

            const lankaNIC = require("lanka-nic");
            let { dateOfBirth, gender } = lankaNIC.getInfoFromNIC(nic);
            setBday(dateFormat(dateOfBirth, 'dddd, mmmm d, yyyy'))
            const capitalizedString = capitalize(gender);
            setGender(capitalizedString)
            // ageCalculater(dateOfBirth)
    }

   const validation = (nic) => {
    const validateRegex = /^([0-9]{9}[xXvV]|[0-9]{12})$/;
    const isValid = validateRegex.test(nic);
    return isValid;
   }

    const clear = () => {
        setNic("")
        setBday("")
        setGender("")
    }

    // const ageCalculater = (dateOfBirth) => {
    //     const date = new Date();
    //    var  dbAge = date - dateOfBirth;
    //     console.log(dbAge);
    // }

  return (
    <Card>
    <Card.Title title="NIC Converter " left={LeftContent} />
        <View>
            <TxtInput value={nic} label={"Your Nic Number"} onChangeText={(val)=> setNic(val)}/>
        </View>

        <View style={styles.view}>
            <Text style={styles.text}>{bday}</Text>
            <Text style={styles.text}>{gender}</Text>
            <Text style={styles.text}>{age}</Text>
        </View>

        <View style={styles.view}>
        <Button style={styles.btn} buttonColor={"green"} text={"Search"} onPress={search}/>
        <Button buttonColor={"red"} text={"Clear"} onPress={clear}/>
        </View>
  </Card>
  )
}

const styles = StyleSheet.create ({
    view:{
        padding: 20,
        paddingBottom:50
    },
    text:{
        fontSize:20,
        fontWeight:'bold',
        color:'black'
    },

    btn:{
        marginBottom: 20,
    }
})