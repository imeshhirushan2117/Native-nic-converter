import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper';
export default function Btn({onPress,text,buttonColor, style}) {
    return (
        <View style={styles.view}>
            <Button style={style}  buttonColor={buttonColor} mode="contained" onPress={onPress}>
            <Text variant="headlineLarge">{text}</Text>
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({

})
 
  