import {
  ScrollView,
  Animated,
  StyleSheet,
  Image,
  View,
  Text,
  Dimensions,
  Easing,
} from 'react-native';
import React, {useEffect, useRef} from 'react';

const {height, width} = Dimensions.get('window');
export default function ContactList({isSearchActive}) {
  const contacts = [
    {
      uid: 1,
      name: 'BA GURU NOTES TAGO',
      imageUrl:
        'https://photosking.net/wp-content/uploads/2024/05/no-dp_16.webp',
      recentMsg: 'You: EVS Re test Question Bank...',
      time: '15:15',
      unseenMsgNumber: '1',
    },
    {
      uid: 2,
      name: 'Amma',
      imageUrl: 'https://i.postimg.cc/g0PzxvBM/profilei-Img.png',
      subMsg: 'You: EVS Re test Question Bank...',
      time: '15:15',
      unseenMsgNumber: '1',
    },
    {
      uid: 3,
      name: 'Baba',
      imageUrl:
        'https://photosking.net/wp-content/uploads/2024/05/no-dp_16.webp',
      subMsg: 'You: EVS Re test Question Bank...',
      time: '15:15',
      unseenMsgNumber: '1',
    },
    {
      uid: 4,
      name: 'Akka ❤',
      imageUrl:
        'https://photosking.net/wp-content/uploads/2024/05/no-dp_16.webp',
      subMsg: 'You: EVS Re test Question Bank...',
      time: '15:15',
      unseenMsgNumber: '1',
    },
    {
      uid: 5,
      name: 'Pradhyumna Mit',
      imageUrl:
        'https://photosking.net/wp-content/uploads/2024/05/no-dp_16.webp',
      subMsg: 'You: EVS Re test Question Bank...',
      time: '15:15',
      unseenMsgNumber: '1',
    },
    {
      uid: 6,
      name: 'Rajath Mit',
      imageUrl: '',
      subMsg: 'You: EVS Re test Question Bank...',
      time: '15:15',
      unseenMsgNumber: '1',
    },
    {
      uid: 7,
      name: 'Joel Sunny',
      imageUrl:
        'https://photosking.net/wp-content/uploads/2024/05/no-dp_16.webp',
      subMsg: 'You: EVS Re test Question Bank...',
      time: '15:15',
      unseenMsgNumber: '1',
    },
    {
      uid: 8,
      name: 'Dsouza💕',
      imageUrl:
        'https://photosking.net/wp-content/uploads/2024/05/no-dp_16.webp',
      subMsg: 'You: EVS Re test Question Bank...',
      time: '15:15',
      unseenMsgNumber: '1',
    },
    {
      uid: 9,
      name: 'Golu',
      imageUrl:
        'https://photosking.net/wp-content/uploads/2024/05/no-dp_16.webp',
      subMsg: 'You: EVS Re test Question Bank...',
      time: '15:15',
      unseenMsgNumber: '1',
    },
    {
      uid: 10,
      name: 'Reddy',
      imageUrl:
        'https://photosking.net/wp-content/uploads/2024/05/no-dp_16.webp',
      subMsg: 'You: EVS Re test Question Bank...',
      time: '15:15',
      unseenMsgNumber: '1',
    },
    {
      uid: 11,
      name: 'BA GURU NOTES TAGO',
      imageUrl:
        'https://photosking.net/wp-content/uploads/2024/05/no-dp_16.webp',
      recentMsg: 'You: EVS Re test Question Bank...',
      time: '15:15',
      unseenMsgNumber: '1',
    },
    {
      uid: 12,
      name: 'BA GURU NOTES TAGO',
      imageUrl:
        'https://photosking.net/wp-content/uploads/2024/05/no-dp_16.webp',
      recentMsg: 'You: EVS Re test Question Bank...',
      time: '15:15',
      unseenMsgNumber: '1',
    },
    {
      uid: 13,
      name: 'BA GURU NOTES TAGO',
      imageUrl:
        'https://photosking.net/wp-content/uploads/2024/05/no-dp_16.webp',
      recentMsg: 'You: EVS Re test Question Bank...',
      time: '15:15',
      unseenMsgNumber: '1',
    },
    {
      uid: 14,
      name: 'BA GURU NOTES TAGO',
      imageUrl:
        'https://photosking.net/wp-content/uploads/2024/05/no-dp_16.webp',
      recentMsg: 'You: EVS Re test Question Bank...',
      time: '15:15',
      unseenMsgNumber: '1',
    },
    {
      uid: 15,
      name: 'BA GURU NOTES TAGO',
      imageUrl:
        'https://photosking.net/wp-content/uploads/2024/05/no-dp_16.webp',
      recentMsg: 'You: EVS Re test Question Bank...',
      time: '15:15',
      unseenMsgNumber: '1',
    },
    {
      uid: 15,
      name: 'BA GURU NOTES TAGO',
      imageUrl:
        'https://photosking.net/wp-content/uploads/2024/05/no-dp_16.webp',
      recentMsg: 'You: EVS Re test Question Bank...',
      time: '15:15',
      unseenMsgNumber: '1',
    },
    {
      uid: 15,
      name: 'BA GURU NOTES TAGO',
      imageUrl:
        'https://photosking.net/wp-content/uploads/2024/05/no-dp_16.webp',
      recentMsg: 'You: EVS Re test Question Bank...',
      time: '15:15',
      unseenMsgNumber: '1',
    },
    {
      uid: 15,
      name: 'BA GURU NOTES TAGO',
      imageUrl:
        'https://photosking.net/wp-content/uploads/2024/05/no-dp_16.webp',
      recentMsg: 'You: EVS Re test Question Bank...',
      time: '15:15',
      unseenMsgNumber: '1',
    },
    {
      uid: 15,
      name: 'BA GURU NOTES TAGO',
      imageUrl:
        'https://photosking.net/wp-content/uploads/2024/05/no-dp_16.webp',
      recentMsg: 'You: EVS Re test Question Bank...',
      time: '15:15',
      unseenMsgNumber: '1',
    },
  ];

  const animatedTop = useRef(new Animated.Value(height * 0.15)).current;

  useEffect(() => {
    Animated.timing(animatedTop, {
      toValue: isSearchActive ? height * 0.23 : height * 0.14,
      duration: 400, // Smooth transition duration
      easing: Easing.inOut(Easing.ease), // ease-in-out effect
      useNativeDriver: false, // Because we're animating a layout property (top)
    }).start();
  }, [isSearchActive]); //Animation effect when searchBar states changes

  return (
    <Animated.View style={[styles.container, {top: animatedTop}]}>
      {console.log(isSearchActive)}
      <ScrollView scrollEnabled={true} style={{paddingTop: 16}}>
        {contacts.map(contact => (
          <View key={contact.uid} style={styles.contactContainer}>
            <View style={styles.img_name}>
              <View
                style={{
                  backgroundColor: '#E7E7E7',
                  borderRadius: 12,
                  overflow: 'hidden',
                }}>
                <Image
                  source={{
                    uri: contact.imageUrl,
                  }}
                  style={styles.img}
                />
              </View>
              <View style={styles.txt}>
                <Text style={{color: '#041E49', fontWeight: 400, fontSize: 14}}>
                  {contact.name}
                </Text>
                <Text style={{color: '#444746', fontWeight: 400, fontSize: 10}}>
                  Done
                </Text>
              </View>
            </View>
            <View style={styles.time_unseen}>
              <Text style={{color: '#444746', fontWeight: 400, fontSize: 12}}>
                {contact.time}
              </Text>
              <View style={styles.unseen}>
                <Text style={{color: '#fff'}}>99+</Text>
              </View>
            </View>
          </View> //Do Seperate Component for this (ChatListItem)
        ))}
      </ScrollView>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 16,
    zIndex: 1,
  },
  contactContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 16,
    paddingRight: 26,
    paddingVertical: 6,
  },
  img: {
    height: 40,
    width: 40,
    borderRadius: 12,
    resizeMode: 'cover',
    overflow: 'hidden',
  },
  img_name: {
    flexDirection: 'row',
  },
  txt: {
    flexDirection: 'colum',
    justifyContent: 'space-between',
    paddingLeft: 12,
    paddingBottom: 2,
    alignItems: 'flex-start',
  },
  time_unseen: {
    alignItems: 'flex-end',
  },
  unseen: {
    backgroundColor: '#041E49',
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 10,
    paddingHorizontal: 6,
  },
});
