import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Styles } from '../estilos/styles';

//importacion de pantallas
import HomeScreen from './home';

export default function mapScreen() {
    return (
      <View style={Styles.container}>
        <Text>estas en el mapa!!! </Text>
        <StatusBar style="auto" />
      </View>
    );
  }