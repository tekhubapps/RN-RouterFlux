/*************************************************
 * Vincari
 * @exports
 * @class index.js
 * @extends Component
 * Created by Edward Sagayaraj on 12/03/2018
 * Modified by Jagadish Sellamuthu to add other components
 * Copyright © 2016 Vincari. All rights reserved.
 *************************************************/

'use strict';

import React, { Component } from 'react';

import {
  Platform,
  BackHandler,
  Alert,
} from 'react-native';

import { Router, Scene, ActionConst } from 'react-native-router-flux';

import Login from './Login';
import DashBoard from './DashBoard';
import PrevScreenData from './PrevScreenData';
import AndroidBack from './AndroidBack';
import MultipleScreen from './MultipleScreen';

/**
 * Registeres all the components used in the application for navigation
 */
class App extends Component {

  componentDidMount() {
    if(Platform.OS !== 'ios'){
      BackHandler.addEventListener('hardwareBackPress', () => {
        if(Actions.currentScene === 'androidBack'){     
          Alert.alert('Info',
            'Are you sure you want to leave this screen?',[
              {text: 'Exit Screen', onPress: () => {
                Actions.pop();
              }},
              {text: 'Cancel', onPress: () => {
                
              }},
            ],
            { cancelable: false }
          );
          return true;
        } else {
          return false;
        }
      });
    }
  }

  render() {
    return (
      <Router>
        <Scene key="root"
          hideNavBar
        >

          <Scene key={'login'} component={Login} type={ActionConst.RESET} initial />
          <Scene key={'dashBoard'} component={DashBoard} type={ActionConst.RESET} />
          <Scene key={'prevScreenData'} component={PrevScreenData} />
          <Scene key={'multipleScreen'} component={MultipleScreen} />
        
        </Scene>
      </Router>
    );
  }
}

export default App;
