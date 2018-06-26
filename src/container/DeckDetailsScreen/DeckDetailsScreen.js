import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import {
  setLocalNotification,
  clearLocalNotification,
  getDailyReminderValue
} from '../../common/helpers';

export default class DeckDetailsScreen extends Component {
  state = {
    opacity: new Animated.Value(0)
  };
  componentDidMount() {
    const { opacity } = this.state;
    Animated.timing(opacity, { toValue: 1, duration: 1000 }).start();
  }
  render() {
    const { deck = {}, addCard } = this.props.navigation.state.params;
    const { questions = [] } = deck;
    const { opacity } = this.state;
    const title = deck.title;

    return (
      <Animated.View
        style={{ height: '100%', backgroundColor: '#FFFD', opacity }}
      >
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
            {deck.title}
          </Text>
        </View>

        <View
          style={{
            backgroundColor: 'white',
            margin: 10,
            paddingVertical: 15,
            justifyContent: 'center',
            height: '40%',
            alignItems: 'center',
            borderRadius: 5,
            elevation: 4
          }}
        >
          <Text style={{ fontSize: 25, fontWeight: 'bold' }}>{deck.title}</Text>
          <Text style={{ marginTop: 10 }}>
            {questions.length} {questions.length > 1 ? 'Cards' : 'Card'}
          </Text>
        </View>
        <View
          style={{
            alignSelf: 'center',
            width: '50%'
          }}
        >
          <TouchableOpacity
            onPress={() =>
              // addCard({
              //   title: 'React',
              //   question: 'question',
              //   answer: 'answer'
              // })
              this.props.navigation.navigate('AddCard', {
                title,
                addCard
              })
            }
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              padding: 10,
              margin: 5,
              borderColor: '#0081cb',
              borderWidth: 1,
              borderRadius: 5
            }}
          >
            <Text>Add Card</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              questions.length > 0
                ? this.props.navigation.navigate('Quiz', { deck })
                : alert(
                    'This deck does not have any card. Please add a card to start the quiz'
                  );
            }}
            style={{
              padding: 10,
              alignItems: 'center',
              margin: 5,
              justifyContent: 'center',
              backgroundColor: '#0081cb',
              borderColor: '#0081cb',
              borderWidth: 1,
              borderRadius: 5
            }}
          >
            <Text style={{ color: 'white' }}>Start Quiz</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    );
  }
}
