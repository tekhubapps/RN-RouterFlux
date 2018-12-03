
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
  ScrollView,
  Platform,
  TouchableHighlight,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class DashBoard extends Component {

  /**
   * Conditional rendering in react based on value (state,props validations used for runtime UI changes)
   */
  _renderBack() {
    if (Platform.OS === 'android') {
      return(
        <TouchableHighlight style={styles.button}
          underlayColor="transparent"
          onPress={() => {
            Actions.androidBack();
          }}
        >
          <Text style={styles.buttonText}>Back with alert</Text>
        </TouchableHighlight>
      );
    }
    return null;
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>

          <View style={{alignItems: 'center', marginTop: 40}}>

            <TouchableHighlight style={styles.button}
              underlayColor="transparent"
              onPress={() => {
                Actions.prevScreenData({displayStr: 'Data from Prev Screen'});
              }}
            >
              <Text style={styles.buttonText}>Pass a value</Text>
            </TouchableHighlight>

            
            {this._renderBack()}

            <TouchableHighlight style={styles.button}
              underlayColor="transparent"
              onPress={() => {
                Actions.multipleScreen();
              }}
            >
              <Text style={styles.buttonText}>Open DashBoard from Anywhere</Text>
            </TouchableHighlight>
            

            <TouchableHighlight style={styles.buttonSignup}
              underlayColor={'transparent'}
              onPress={() => {
                Actions.login();
              }}
            >
              <Text style={[styles.buttonTextSignup, {color: '#6D6E70'}]}>Logout</Text>
            </TouchableHighlight>

          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  button: {
    height: 40,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#057DC1',

  },
  buttonText: {
    fontSize: 17,
    color: '#057DC1',
    fontWeight: 'bold',
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
