import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import {StatusBar} from 'expo-status-bar'

const _TabLayout = () => {
  return (
    <>
   <StatusBar style='dark'/>
   <Tabs screenOptions={{
    // tabBarShowLabel: false,
    headerShown: false,
    tabBarActiveTintColor: 'blue',
    tabBarInactiveTintColor: 'gray',
   }}>
    <Tabs.Screen 
    name="index" 
    options={{ tabBarIcon: ({color})=> 
    (<MaterialCommunityIcons 
    name="qrcode" 
    size={24} 
    color={color} />), 
    title: "Home"}} />

    <Tabs.Screen name="generator" options={{ tabBarIcon: ({color})=> (<MaterialCommunityIcons name="qrcode-plus" size={24} color={color}/>), title: "Generator" }} />  
    </Tabs>
     </>
  )
}
 

export default _TabLayout

const styles = StyleSheet.create({})