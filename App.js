import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Styles } from './estilos/styles';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Navigation from './navigation';

//importacion de pantallas
import HomeScreen from './pantallas/home';
import mapScreen from './pantallas/mapa';






export default function App() {

  return (
    <Navigation />
  );
}

