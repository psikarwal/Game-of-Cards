import React, { Component } from 'react';
import { View, Text, Button, TextInput, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

class NewDeck extends React.Component {
  state = {
    title: ''
  };
  render() {
    const handleSubmit = () => {
      if (this.state.title.trim()) {
        this.props.addDeck(this.state.title.trim());
        this.setState({ title: '' });
        this.props.navigation.goBack();
      } else {
        alert('This field cannot be left empty');
      }
    };
    return (
      <View
        style={{
          flex: 1,
          margin: 10
        }}
      >
        <View
          style={{
            backgroundColor: 'white',
            margin: 10,
            paddingVertical: 15,
            paddingHorizontal: 15,
            height: '50%',
            borderRadius: 5,
            alignItems: 'center',
            justifyContent: 'center',
            elevation: 4
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 30 }}>
            What is the title of your new deck?
          </Text>
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
            placeholder="Give a title to your Deck"
            placeholderTextColor="#888"
            onChangeText={title => this.setState({ title })}
            value={this.state.text}
          />
        </View>
        <View
          style={{
            width: '50%',
            alignSelf: 'center'
          }}
        >
          <TouchableOpacity
            onPress={() => handleSubmit()}
            style={{
              padding: 10,
              alignItems: 'center',
              margin: 5,
              justifyContent: 'center',
              backgroundColor: '#0081cb',
              borderColor: '#0081cb',
              borderWidth: 1,
              borderRadius: 5,
              elevation: 4
            }}
          >
            <Text style={{ color: 'white' }}>Add Deck</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default withNavigation(NewDeck);
