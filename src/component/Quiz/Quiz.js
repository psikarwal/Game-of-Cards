import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
export default class Quiz extends Component {
  state = {
    question: true
  };
  render() {
    const { total, count } = this.props;
    return (
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
        <Text style={{ alignSelf: 'flex-end' }}>
          {total - count + 1} Remaining
        </Text>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center'
          }}
        >
          <Text style={{ fontSize: 25, fontWeight: 'bold' }}>
            {this.state.question
              ? this.props.question.question
              : this.props.question.answer}
          </Text>
          <TouchableOpacity
            onPress={() =>
              this.setState(state => ({
                question: !state.question
              }))
            }
          >
            <Text style={{ marginTop: 10 }}>
              Show {this.state.question ? 'Answer' : 'Question'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
