import { View, Text } from 'react-native'
import React from 'react'
import { PaperProvider } from 'react-native-paper';
import Cad from './src/pages/Cad/Cad'
export default function App() {
  return (
    <PaperProvider>
      <Cad/>
    </PaperProvider>
  )
}