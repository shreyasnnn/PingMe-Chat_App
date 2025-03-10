import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ChatListView from './Src/Views/ChatListView/ChatListView'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import ChatView from './Src/Views/ChatView/ChatView';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import SignInView from './Src/Views/SignInView/SignInView';


const Stack = createNativeStackNavigator();

export default function App() {

const [user , setUser] = React.useState(null);



  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer >
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='ChatListView'>
        <Stack.Screen name="SignInView" component={SignInView} />
        <Stack.Screen name="ChatListView" component={ChatListView} />
        <Stack.Screen name="ChatView" component={ChatView} />
      </Stack.Navigator>
    </NavigationContainer>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({})