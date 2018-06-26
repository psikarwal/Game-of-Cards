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
import {
  clearLocalNotification,
  setLocalNotification
} from '../../common/helpers';

export default class QuizScreen extends Component {
  state = {
    count: 1,
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
  componentDidUpdate() {
    if (
      this.props.navigation.state.params.deck.questions.length ===
      this.state.count - 1
    )
      clearLocalNotification().then(setLocalNotification);
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
        {this.state.count <= questions.length ? (
          <View>
            <Quiz
              count={this.state.count}
              question={questions[this.state.count - 1]}
              total={questions.length}
            />
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
        ) : (
          <View>
            <View
              style={{
                backgroundColor: 'white',
                margin: 10,
                paddingVertical: 15,
                paddingHorizontal: 15,
                height: '60%',
                borderRadius: 5,
                elevation: 4
              }}
            >
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: 'bold'
                }}
              >
                Score
              </Text>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'column',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  marginTop: 20
                }}
              >
                <View
                  style={{
                    flexDirection: 'row'
                  }}
                >
                  <Text
                    style={{
                      width: '50%',
                      color: 'green',
                      fontSize: 20,
                      fontWeight: 'bold'
                    }}
                  >
                    Correct
                  </Text>
                  <Text
                    style={{ width: '10%', fontSize: 20, fontWeight: 'bold' }}
                  >
                    {this.state.correct}
                  </Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <Text
                    style={{
                      width: '50%',
                      color: 'red',
                      fontSize: 20,
                      fontWeight: 'bold'
                    }}
                  >
                    Incorrect
                  </Text>
                  <Text
                    style={{ width: '10%', fontSize: 20, fontWeight: 'bold' }}
                  >
                    {this.state.incorrect}
                  </Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <Text
                    style={{ width: '50%', fontSize: 20, fontWeight: 'bold' }}
                  >
                    Total
                  </Text>
                  <Text
                    style={{ width: '10%', fontSize: 20, fontWeight: 'bold' }}
                  >
                    {questions.length}
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                alignSelf: 'center',
                width: '50%'
              }}
            >
              <TouchableOpacity
                onPress={() =>
                  this.setState({
                    count: 1,
                    correct: 0,
                    incorrect: 0
                  })
                }
                style={{
                  padding: 10,
                  alignItems: 'center',
                  margin: 5,
                  justifyContent: 'center',
                  borderColor: '#0081cb',
                  borderWidth: 1,
                  borderRadius: 5
                }}
              >
                <Text>Restart</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.goBack()}
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
                <Text style={{ color: 'white' }}>Go Back</Text>
              </TouchableOpacity>
              <Text>
                {this.state.correct} {this.state.incorrect} {this.state.count}{' '}
                {questions.length}
              </Text>
            </View>
          </View>
        )}
      </View>
    );
  }
}
