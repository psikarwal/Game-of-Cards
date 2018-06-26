import React, { Component } from 'react';
import Deck from '../../component/Deck/Deck';
import { withNavigation } from 'react-navigation';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  Button,
  TouchableOpacity
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

class AddCardScreen extends Component {
  state = {
    question: '',
    answer: ''
  };
  render() {
    const { question, answer } = this.state;
    const { title, addCard } = this.props.navigation.state.params;
    const handleSubmit = () => {
      if (this.state.question && this.state.answer) {
        addCard({
          title,
          question: this.state.question,
          answer: this.state.answer
        });
        this.props.navigation.goBack();
      } else {
        alert('Question and Answer cannot be empty');
      }
    };
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
            Add Card
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            margin: 10
          }}
        >
          <TextInput
            style={{
              height: 40,
              width: '100%',
              borderColor: 'gray',
              borderWidth: 1,
              padding: 10,
              marginBottom: 15,
              borderRadius: 5
            }}
            placeholder="Question"
            placeholderTextColor="#888"
            onChangeText={question => this.setState({ question })}
            value={this.state.question}
          />
          <TextInput
            style={{
              height: 40,
              width: '100%',
              borderColor: 'gray',
              borderWidth: 1,
              padding: 10,
              marginBottom: 15,
              borderRadius: 5
            }}
            placeholder="Answer"
            placeholderTextColor="#888"
            onChangeText={answer => this.setState({ answer })}
            value={this.state.answer}
          />
          <Button title="Add Card" onPress={() => handleSubmit()} />
        </View>
      </View>
    );
  }
}

export default AddCardScreen;
