import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {useCameraPermissions} from 'expo-camera'
import { Link } from 'expo-router'


const Index = () => {
  const [permission, requestPermission] = useCameraPermissions()
  const isPermissionGranted = Boolean(permission?.granted)


  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.title}>QR Code Scanner</Text>
        <View style={{gap: 20}}>
      <TouchableOpacity onPress={()=> {requestPermission()}}>
        <Text style={styles.buttton}>Scan QR Code</Text>
      </TouchableOpacity>
      <Link href={'/scanner'} asChild>
      <TouchableOpacity disabled={!isPermissionGranted}>
        <Text style={[styles.buttton, {
          opacity: isPermissionGranted ? 1 : 0.5
        }]}>Scan Code</Text>
      </TouchableOpacity>
      </Link>
        </View>
    </SafeAreaView>
  )
}

export default Index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 80
  },
  title: {
    color: 'black',
    fontSize: 40,
  },
  buttton: {
    color: 'blue',
    fontSize: 20,
    textAlign: 'center',
  }
})