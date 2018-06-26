import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import NewDeck from '../../component/NewDeck/NewDeck';
import { MaterialIcons } from '@expo/vector-icons';

class AddDeckScreen extends React.Component {
  static navigationOptions = {
    title: 'Add Deck'
  };
  render() {
    return (
      <View style={{ height: '100%', backgroundColor: '#FFFD' }}>
        <View style={{ height: 24, backgroundColor: '#0081cb' }} />
        <View
          style={{
            backgroundColor: '#00b0ff',
            padding: 15,
            elevation: 6,
            flexDirection: 'row',
            alignItems: 'center'
          }}
        >
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <MaterialIcons name="arrow-back" size={28} color="#fff" />
          </TouchableOpacity>
          <Text
            style={{
              marginLeft: 15,
              color: 'white',
              fontSize: 20
            }}
          >
            Add A Deck
          </Text>
        </View>
        <NewDeck addDeck={this.props.navigation.state.params} />
      </View>
    );
    //return <Text>LOLOLLOL</Text>;
  }
}

export default AddDeckScreen;
