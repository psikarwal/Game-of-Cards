import React, { Component } from 'react';
import { View, Text, Button, TextInput } from 'react-native';

class NewDeck extends React.Component {
  state = {
    title: ''
  };
  render() {
    return (
      <View
      // style={{
      //   flex: 1,
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   margin: 10
      // }}
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
          placeholder="Give a title to your Deck"
          placeholderTextColor="#888"
          onChangeText={title => this.setState({ title })}
          value={this.state.text}
        />
        <Button
          title="Add Deck"
          onPress={() => {
            this.props.addDeck(this.state.title);
            this.setState({ title: '' });
          }}
        />
      </View>
    );
  }
}

export default NewDeck;
