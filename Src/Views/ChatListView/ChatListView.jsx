import {
  ImageBackground,
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import Options from './Components/Options';
import ContactList from './Components/ContactList';
import SearchBar from './Components/SearchBar';

export default function ChatView({navigation}) {
    const [isChatSelected, setIsChatSelected] = useState(true); //Chat or Group
  const [isSearchActive, setIsSearchActive] = useState(false);
  const {height, width} = Dimensions.get('window');

  return (
    <View>
      <ImageBackground
        // source={require('../../../Assets/backgroud-imag.jpg')}
        source={require('../../../Assets/Backgroud-imag.jpg')}
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
      <ContactList isSearchActive={isSearchActive} navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({});
