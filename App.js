import React, { Component } from 'react';
import { Ionicons } from '@expo/vector-icons';
import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
  createStackNavigator
} from 'react-navigation';
import DeckScreen from './src/container/Deck/DeckScreen';
import AddDeckScreen from './src/container/AddDeck/AddDeckScreen';
import DeckDetailsScreen from './src/container/DeckDetailsScreen/DeckDetailsScreen';
import AddCardScreen from './src/container/AddCard/AddCardScreen';

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: DeckScreen
    },
    Details: DeckDetailsScreen,
    AddCard: AddCardScreen
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
    title: 'Home'
  }
);

const AddDeckStack = createStackNavigator({
  Settings: AddDeckScreen
  //Details: DetailsScreen
});

export default createBottomTabNavigator(
  {
    Decks: {
      screen: HomeStack
    },
    'New Deck': AddDeckStack
  },
  {
    tabBarOptions: {
      activeTintColor: '#00b0ff',
      inactiveTintColor: 'gray'
    }
  }
);
