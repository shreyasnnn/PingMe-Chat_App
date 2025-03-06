import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ChatListView from './Src/Views/ChatListView/ChatListView'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import ChatView from './Src/Views/ChatView/ChatView';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer >
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='ChatListView'>
        <Stack.Screen name="ChatListView" component={ChatListView} />
        <Stack.Screen name="ChatView" component={ChatView} />
      </Stack.Navigator>
    </NavigationContainer>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({})