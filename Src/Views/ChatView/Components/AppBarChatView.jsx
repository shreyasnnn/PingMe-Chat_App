import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import BackArrowIcon from '../../../../Assets/Options/BackArrowIcon';
import Menu from '../../../../Assets/Options/Menu'

const AppBarChartView = ({contact, onBackPress, onMorePress}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 10,
      }}>
      {/* Back Button */}
      <TouchableOpacity
        onPress={onBackPress}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fff',
          height: 36,
          width: 36,
          borderRadius: 18,
        }}>
        <BackArrowIcon height={36} width={36} fillColor="white" />
      </TouchableOpacity>

      {/* Profile & Name */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginLeft: 8,
          flex: 1,
        }}>
        <View style={{width: 40, height: 40, borderRadius: 12,backgroundColor: '#E7E7E7',overflow: 'hidden'}}>
        <Image
          source={{uri: contact.imageUrl}} // Replace with actual profile image URL
          style={{width: 40, height: 40, borderRadius: 12}}
        />
        </View>
        <View style={{marginLeft: 8}}>
          <Text style={{fontSize: 16, fontWeight: 'bold',color: '#fff'}}>{contact.name}</Text>
          <Text style={{fontSize: 12, color: 'white'}}>Just a min ago</Text>
        </View>
      </View>

      {/* More Options */}
      <TouchableOpacity onPress={onMorePress} style={{
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fff',
          height: 30,
          width: 30,
          borderRadius: 20,
        }}>
        <Menu width={4} height={16} fillColor={'#041E49'} />
      </TouchableOpacity>
    </View>
  );
};

export default AppBarChartView;
