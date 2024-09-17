import { Tabs } from 'expo-router';
import { useState } from 'react';
import { View, Text, SafeAreaView, StatusBar, Button, Pressable, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Feed() {

  return (
    <SafeAreaView>
      <StatusBar />
      <Tabs.Screen

        options={{
          headerRight: () => (
            <TouchableOpacity onPress={() => console.log('Edit button pressed')}>
              <Ionicons name="create-outline" size={28} color="rgba(0, 122, 255, 1)" style={{ marginRight: 15 }} />
            </TouchableOpacity>
          ),
          headerLeft: () => (
            <TouchableOpacity onPress={() => console.log('Edit button pressed')}>
              <Text style={{ marginLeft: 15, fontSize: 18, color: 'rgba(0, 122, 255, 1)' }}>Edit</Text>
            </TouchableOpacity>
          ),
        }}
      />
      <View style={styles.container}>
        <View style={styles.topLine}>
          <Text>Broadcast Lists</Text>
          <Text>New Group</Text>
        </View>
      </View>



    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  topLine:{
    width:'100%',
    height: 44,
    flexDirection: 'row',
  },
});
