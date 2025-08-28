import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, TextInput } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from '@/constants/Colors';
import { Link } from 'expo-router';
import React from 'react'

export default function CustomHeader() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <TouchableOpacity>
          <Image style={styles.bike} source={require('@/assets/images/bike.png')}/>
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Entregando</Text>      
          <TouchableOpacity style={styles.location}>
            <Text style={styles.subtitle}>
              Barra Bonita - sp
            </Text>
            <Ionicons name='chevron-dow' size={25} color={Colors.primary}/>
          </TouchableOpacity>  
        </View>
        <TouchableOpacity style={styles.profileButton}>
          <Ionicons name='person-outline' size={25} color={Colors.primary}/>
        </TouchableOpacity> 
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#fff',
  },
  container:{
    height: 60,
    backgroundColor: '#fff',
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  bike:{
    width: 30,
    height: 30,
  },
  titleContainer: {
    flex: 1
  },
  title: {
    fontSize: 14,
    color: Colors.medium,     
    
    
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 5,
  },
  profileButton: {
    backgroundColor: Colors.lghtGrey,
    padding: 10,
    borderRadius: 50
  }
})