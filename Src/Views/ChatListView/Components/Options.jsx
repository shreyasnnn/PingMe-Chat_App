import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import ToggleWrapper from './ToggleWrapper';
import SearhIconBtn from './SearchIconBtn';
import AccountName from './AccountName';
import BackArrowIcon from '../../../../Assets/Options/BackArrowIcon';
import MainIcon from '../../../../Assets/Options/MainIcon';

export default function Options({
  isSearchActive,
  setIsSearchActive,
  isChatSelected,
  setIsChatSelected,
}) {
  return (
    <>
      <View style={styles.container}>
        {/* <BackArrowIcon width={30} height={30} strokeColor="white" /> */}
        <MainIcon /> {/*AppIcon*/}
        <ToggleWrapper
          isChatSelected={isChatSelected}
          setIsChatSelected={setIsChatSelected}
        />{' '}
        {/*ToggleSwitch*/}
        <View style={styles.lastTwo}>
          <TouchableOpacity
            onPress={() => {
              setIsSearchActive(!isSearchActive);
            }}>
            <SearhIconBtn /> {/*CustomIconButton*/}
          </TouchableOpacity>
          <View style={{paddingLeft: 6}}>
            <AccountName /> {/*ProfileIcon*/}
          </View>
        </View>
      </View>
      {isChatSelected?(<Text style={styles.txt}>Chat</Text>):(<Text style={styles.txt}>Group</Text>)}
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
  txt: {
    color: '#fff',
    fontWeight: 400,
    fontSize: 24,
    paddingLeft: 16,
    paddingTop: 24,
  },
});
