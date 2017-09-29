import * as React from 'react';
import {Provider} from 'react-redux';
import { createStore } from 'redux'

import reducer from "./reducers";
import {
  StyleSheet,
  Text,
  View
} from 'react-native';


const styles:any = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

let store = createStore(reducer);

export default class Application extends React.Component<{}, {}> {

  render() {
    return (
      <Provider store={store}>
      <View style={styles.container}>
        <Text style={styles.welcome}>
          welcome
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
      </Provider>
    );
  }
}

