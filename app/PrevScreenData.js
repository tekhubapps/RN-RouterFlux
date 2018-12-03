
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
import PropTypes from 'prop-types'; 
import { Actions } from 'react-native-router-flux';

export default class PrevScreenData extends Component {

  static propTypes = {
    displayStr: PropTypes.string,
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 18, color: '#6D6E70'}}>Value</Text>
        <Text style={{fontSize: 24, color: '#000000'}}>
          {this.props.displayStr}
        </Text>

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
