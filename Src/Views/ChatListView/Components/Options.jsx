import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import ToggleWrapper from './ToggleWrapper';
import SearhIconBtn from './SearchIconBtn';
import AccountName from './AccountName';
import BackArrowIcon from '../../../../Assets/Options/BackArrowIcon';
import MainIcon from '../../../../Assets/Options/MainIcon'

export default function Options({isSearchActive, setIsSearchActive}) {

  return (
    <>
      <View style={styles.container}>
        {/* <BackArrowIcon width={30} height={30} strokeColor="white" /> */}
        <MainIcon />
        <ToggleWrapper />
        <View style={styles.lastTwo}>
          <TouchableOpacity onPress={() => {setIsSearchActive(!isSearchActive) ; console.log("aaaaaa")}}>
            <SearhIconBtn />
          </TouchableOpacity>
          <View style={{paddingLeft:6}}>
            <AccountName />
          </View>
        </View>
      </View>
      <Text style={styles.txt}>Chats</Text>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  firstTwo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  lastTwo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  txt:{
    color: '#fff',
    fontWeight: 400,
    fontSize: 24,
    paddingLeft:16,
    paddingTop:24
  },
});
