import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import QRCode from "react-native-qrcode-svg"

const Generator = () => {

  const [inputValue, setInputValue] = React.useState("https://docs.expo.dev/")
  const [qrValue, setQrValue] = React.useState(inputValue)

  const handleInputChange = (text: string) => {
    setInputValue(text);
    setQrValue('')
  }

  const generateQrCode = () => {
    setQrValue(inputValue)
  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} 
      placeholder='Enter text or URL' 
      autoCapitalize='none'
      onChangeText={handleInputChange}
      value={inputValue}
      />

      <TouchableOpacity onPress={generateQrCode} style={{backgroundColor: 'blue', padding: 10, borderRadius: 5, marginBottom: 20,}}>
        <Text style={{color: 'white'}}>Generate QR Code</Text>
      </TouchableOpacity>

      {
        qrValue ? (
          <QRCode
          value={qrValue}
          size={200}
          color='black'
          backgroundColor='white'
          />
        ) : null
      }
    </View>
  )
}

export default Generator

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '100%'
  }
})