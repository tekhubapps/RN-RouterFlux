
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
} from 'react-native';

export default class AndroidBack extends Component {


  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 18, color: '#6D6E70'}}>Press hardward back and get an alert(Code implemented in App.js)</Text>
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
});
