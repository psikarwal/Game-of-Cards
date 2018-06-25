import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';
//import { withNavigation } from 'react-navigation';

class Deck extends Component {
  render() {
    const { deck = {}, addCard } = this.props;
    const { questions = [] } = deck;
    console.log(16, questions);
    console.log(18, this.props);
    return (
      <TouchableOpacity
        style={{
          backgroundColor: '#00b0ff',
          margin: 10,
          borderRadius: 5,
          elevation: 4
        }}
        onPress={() =>
          this.props.navigation.navigate('Details', { deck, addCard })
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
