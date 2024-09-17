import { Tabs } from 'expo-router';
import { useState } from 'react';
import { View, Text, SafeAreaView, StatusBar, Button, Pressable, TouchableOpacity, StyleSheet, Image, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { list } from '../../data';
import { ChatsContact } from '../../componets/chats-contact';
import { Contact } from '../../types/Contact';





export default function Feed() {

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Tabs.Screen

        options={{
          headerBackground: () => (
            <View style={{ backgroundColor: 'rgb(246,246,246,1)', height: '100%' }} />
          ),        
          headerRight: () => (
            <TouchableOpacity onPress={() => console.log('Edit button pressed')}>
              <Ionicons name="create-outline" size={28} color="rgba(0, 122, 255, 1)" style={{ paddingRight: 10 }} />
            </TouchableOpacity>
          ),
          headerLeft: () => (
            <TouchableOpacity onPress={() => console.log('Edit button pressed')}>
              <Text style={{ paddingLeft: 15, fontSize: 18, color: 'rgba(0, 122, 255, 1)' }}>Edit</Text>
            </TouchableOpacity>
          ),
        }}
      />
      <View style={styles.containerChats}>
        <View style={styles.topLine}>
          <Text style={styles.h1}>Broadcast Lists</Text>
          <Text style={styles.h1}>New Group</Text>
        </View>

        <View >
          <FlatList
            data={list}
            renderItem={({item} : {item:Contact}) =>(<ChatsContact product={item} />)}
            keyExtractor={item => item.id.toString()}
          />
        </View>
      
      </View>



    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex:1
  },
  containerChats: {
    backgroundColor: 'white',
  },
  contact:{
  },
  topLine:{
    width:'100%',
    height: 44,
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingLeft:15,
    paddingRight:15,
    borderWidth:1
  
  },
  h1:{
    color:'rgba(0, 122, 255, 1)',
    fontSize:18,
  },
});
