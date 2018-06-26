import React, { Component } from 'react';
import Quiz from '../../component/Quiz/Quiz';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  Button,
  TouchableOpacity
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default class QuizScreen extends Component {
  state = {
    count: 0,
    correct: 0,
    incorrect: 0
  };
  handleSubmit(param) {
    this.setState(state => ({
      ...state,
      count: state.count + 1,
      [param]: state[param] + 1
    }));
  }
  render() {
    const { deck = {} } = this.props.navigation.state.params;
    const { questions = [] } = deck;
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
            Quiz
          </Text>
        </View>

        <Quiz count={this.state.count} total={questions.length} />
        <View
          style={{
            alignSelf: 'center',
            width: '50%'
          }}
        >
          <TouchableOpacity
            onPress={() => this.handleSubmit('correct')}
            style={{
              padding: 10,
              alignItems: 'center',
              margin: 5,
              justifyContent: 'center',
              backgroundColor: 'green',
              borderColor: 'green',
              borderWidth: 1,
              borderRadius: 5
            }}
          >
            <Text style={{ color: 'white' }}>Correct</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.handleSubmit('incorrect')}
            style={{
              padding: 10,
              alignItems: 'center',
              margin: 5,
              justifyContent: 'center',
              backgroundColor: 'red',
              borderColor: 'red',
              borderWidth: 1,
              borderRadius: 5
            }}
          >
            <Text style={{ color: 'white' }}>Incorrect</Text>
          </TouchableOpacity>
          <Text>
            {this.state.correct} {this.state.incorrect} {this.state.count}{' '}
            {questions.length}
          </Text>
        </View>
      </View>
    );
  }
}
