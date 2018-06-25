import React, { Component } from 'react';
import Deck from '../../component/Deck/Deck';
import { withNavigation } from 'react-navigation';
import { View, Text, ScrollView, Button, AsyncStorage } from 'react-native';

class DeckScreen extends Component {
  state = {
    React: {
      title: 'React',
      questions: [
        {
          question: 'What is React?',
          answer: 'A library for managing user interfaces'
        },
        {
          question: 'Where do you make Ajax requests in React?',
          answer: 'The componentDidMount lifecycle event'
        }
      ]
    },
    JavaScript: {
      title: 'JavaScript',
      questions: [
        {
          question: 'What is a closure?',
          answer:
            'The combination of a function and the lexical environment within which that function was declared.'
        }
      ]
    }
  };
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
    //this.decks.push(title);
    //this.forceUpdate();
  };
  render() {
    console.log(43, this.state);
    const decks = Object.keys(this.state);

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
          <Button title="Add Card" onPress={() => this.addDeck('lol')} />
        </ScrollView>
      </View>
    );
  }
}

export default DeckScreen;
