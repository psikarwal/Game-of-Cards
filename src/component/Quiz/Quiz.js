import React, { Component } from 'react';
import { Text, View } from 'react-native';
export default class Quiz extends Component {
  render() {
    const { total, count } = this.props;
    return (
      <View
        style={{
          backgroundColor: 'white',
          margin: 10,
          paddingVertical: 15,
          paddingHorizontal: 15,
          height: '50%',
          borderRadius: 5,
          elevation: 4
        }}
      >
        <Text style={{ alignSelf: 'flex-end' }}>
          {count}/{total}
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
            This is a sample qustion and can you still hold it
          </Text>
          <Text style={{ marginTop: 10 }}>Answer</Text>
        </View>
      </View>
    );
  }
}
