import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import NewDeck from '../../component/NewDeck/NewDeck';

class AddDeckScreen extends React.Component {
  static navigationOptions = {
    title: 'Add Deck'
  };
  handleSubmit() {
    alert('Saved');
  }
  render() {
    return <NewDeck handleSubmit={this.handleSubmit} />;
    //return <Text>LOLOLLOL</Text>;
  }
}

export default AddDeckScreen;
