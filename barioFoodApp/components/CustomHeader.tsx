import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, TextInput } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from '@/constants/Colors';
import { Link } from 'expo-router';
import React from 'react'

const SearchBar = () =>
  <View style={styles.searchContainer}>
    <View style={styles.seachField}>
      <Ionicons style={styles.searchIcon} name='search' size={25} color={Colors.medium} />
      <TextInput style={styles.input} placeholder='Restaurante, lanchonetes, pratos' />
    </View>
    <Link href={'/'} asChild>
       <TouchableOpacity style={styles.optionButton}>
        <Ionicons name='options-outline' size={25} color={Colors.primary} />
       </TouchableOpacity>
    </Link>
    <SearchBar />
  </View>

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
            <Ionicons name='chevron-down' size={25} color={Colors.primary} />
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
  },
  searchContainer: {
    height: 60,
    flexDirection: 'row',
    gap: 10,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  seachField: {
    flex: 1,
    backgroundColor: Colors.lghtGrey,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  } ,
  input: {
    padding: 10,
    color: Colors.madiumDark,
  } ,
  searchIcon: {
    paddingLeft: 10,

  } ,
  optionButton: {
    padding: 10,
    borderRadius: 50,
  } ,
})