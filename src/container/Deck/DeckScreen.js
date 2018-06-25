import React, { Component } from 'react';
import Deck from '../../component/Deck/Deck';
import { withNavigation } from 'react-navigation';
import { View, Text, ScrollView, Button, AsyncStorage } from 'react-native';

class DeckScreen extends Component {
  state = {};
  componentDidMount() {
    AsyncStorage.getItem('decks').then(value =>
      this.setState({ ...JSON.parse(value) })
    );
  }
  componentDidUpdate() {
    this.storeItem('decks', this.state);
    console.log(15, 'component did upadte');
  }
  addCard = ({ title, question, answer }) => {
    this.setState(state => ({
      ...state,
      [title]: {
        ...state[title],
        questions: [...state[title].questions, { question, answer }]
      }
    }));
    //this.forceUpdate();
  };
  addDeck = title => {
    this.setState(state => ({
      ...state,
      [title]: {
        title: title,
        questions: []
      }
    }));
  };
  async storeItem(key, item) {
    try {
      var jsonOfItem = await AsyncStorage.setItem(key, JSON.stringify(item));
      console.log(70, 'try', jsonOfItem);

      return jsonOfItem;
    } catch (error) {
      console.log(error.message);
    }
  }
  render() {
    console.log(43, this.state);
    const decks = Object.keys(this.state);
    console.log(49, this.props);

    return (
      <View style={{ height: '100%', backgroundColor: '#FFF' }}>
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
          <Text
            style={{
              color: 'white',
              fontSize: 20
            }}
          >
            Decks
          </Text>
        </View>
        <ScrollView>
          {decks.map((deck, index) => (
            <Deck
              navigation={this.props.navigation}
              key={`${index + 1}`}
              deck={this.state[deck]}
              addCard={this.addCard}
            />
          ))}
          <Button title="Add Card" onPress={() => this.addDeck('Test')} />
        </ScrollView>
      </View>
    );
  }
}

export default DeckScreen;
