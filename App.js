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
import QuizScreen from './src/container/QuizScreen/QuizScreen';
import { setLocalNotification } from './src/common/helpers';

export default class App extends Component {
  componentDidMount() {
    setLocalNotification();
  }
  render() {
    return <HomeStack />;
  }
}

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: DeckScreen
    },
    NewDeck: AddDeckScreen,
    Details: DeckDetailsScreen,
    AddCard: AddCardScreen,
    Quiz: QuizScreen
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
    title: 'Home'
  }
);
