import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-paper';

export default function TxtInput({onChangeText,value,label}) {

  return (
    <View style={styles.view}>
      <TextInput
    label={label}
    value={value}
    onChangeText={onChangeText}
    mode='outlined'
    activeOutlineColor='green'
    outlineColor='green'
  />
    </View>
  );
}

const styles = StyleSheet.create({
  view:{
    padding: 20,

  }
})
