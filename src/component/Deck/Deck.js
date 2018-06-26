import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';

class Deck extends Component {
  render() {
    const { deck = {}, addCard, getDeck } = this.props;
    const { questions = [] } = deck;
    return (
      <TouchableOpacity
        style={{
          backgroundColor: '#00b0ff',
          margin: 10,
          borderRadius: 5,
          elevation: 4
        }}
        onPress={() =>
          this.props.navigation.navigate('Details', {
            title: deck.title,
            addCard,
            getDeck
          })
        }
      >
        <View
          style={{
            backgroundColor: 'white',
            elevation: 4,
            marginLeft: 5,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5
          }}
        >
          <Text style={{ fontSize: 25, fontWeight: 'bold', margin: 10 }}>
            {deck.title}
          </Text>
          <Text style={{ margin: 10 }}>
            {questions.length} {questions.length > 1 ? 'Cards' : 'Card'}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default Deck;
