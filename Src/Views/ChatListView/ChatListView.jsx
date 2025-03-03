import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import Options from './Components/Options';
import ContactList from './Components/ContactList';
import SearchBar from './Components/SearchBar';

export default function ChatView() {
    const [isChatSelected, setIsChatSelected] = useState(true); //Chat or Group
  const [isSearchActive, setIsSearchActive] = useState(false);
  const {height, width} = Dimensions.get('window');

  return (
    <View>
      <ImageBackground
        source={require('C:/Users/nshre/OneDrive/Desktop/react_native/ChatApp/Assets/backgroud-imag.jpg')}
        resizeMode="cover"
        style={{
          width: '100%',
          height: height * 0.3,
          position: 'absolute',
          zIndex: -1,
        }}>
        <Options
          isSearchActive={isSearchActive}
          setIsSearchActive={setIsSearchActive}
          isChatSelected={isChatSelected}
          setIsChatSelected={setIsChatSelected}
        />
        {/*AppHeader*/}
        {true && (
          <SearchBar
            isSearchActive={isSearchActive}
            setIsSearchActive={setIsSearchActive}
          />
        )}
      </ImageBackground>
      {/* console.log(isSearchActive) */}
      <ContactList isSearchActive={isSearchActive} />
    </View>
  );
}

const styles = StyleSheet.create({});
