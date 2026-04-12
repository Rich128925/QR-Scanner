import { View, Text } from 'react-native'
import React from 'react'
import { CameraView } from 'expo-camera'
import { SafeAreaView } from 'react-native-safe-area-context'

const index = () => {
  return (
   <SafeAreaView>
      <CameraView />
    </SafeAreaView>
  )
}

export default index