import {Image, ImageBackground, StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import Options from './Components/Options';
import ContactList from './Components/ContactList';

export default function ChatView() {
  const { height, width } = Dimensions.get('window');
  return (
    <View>
      <ImageBackground
      source={require('C:/Users/nshre/OneDrive/Desktop/react_native/ChatApp/Assets/backgroud-imag.jpg')}
      resizeMode='cover'
      style={{ width: "100%",height: height * 0.25,position: 'absolute',zIndex: -1}}
      >
      <Options />
    </ImageBackground>
    <ContactList />
  
    </View>
  );
}
