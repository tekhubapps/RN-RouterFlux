
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  StyleSheet, 
  Text, 
  View,
  TouchableHighlight,
} from 'react-native';

import { Actions } from 'react-native-router-flux';

export default class MultipleScreen extends Component {

  render() {
    return (
      <View style={styles.container}>

        <TouchableHighlight style={styles.buttonSignup}
          underlayColor={'transparent'}
          onPress={() => {
            Actions.multipleScreen();
          }}
        >
          <Text style={[styles.buttonTextSignup, {color: '#057DC1'}]}>Open Next Screen</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonSignup}
          underlayColor={'transparent'}
          onPress={() => {
            // move to dashboard if it is available in navigation stack
            Actions.popTo('dashBoard');
          }}
        >
          <Text style={[styles.buttonTextSignup, {color: '#057DC1'}]}>Goto DashBoard</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonSignup}
          underlayColor={'transparent'}
          onPress={() => {
            Actions.pop();
          }}
        >
          <Text style={[styles.buttonTextSignup, {color: '#057DC1'}]}>Back</Text>
        </TouchableHighlight>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  buttonSignup: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  buttonTextSignup: {
    fontSize: 12,
  },
});
