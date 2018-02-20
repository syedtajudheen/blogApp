import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './app/components/home/Home'
import Post from './app/components/postblog/Post'
import { StackNavigator } from 'react-navigation';

import { Provider } from 'react-redux';
import configureStore from './app/store/configureStore';

const store = configureStore();

const Navigation = StackNavigator ({
  Home: {screen: Home},
  Post: {screen: Post}
})

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation/>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    color:'white',
    fontSize : 30,
    textAlign: 'center',
    backgroundColor:'black',
    paddingTop: 20,
    marginBottom: 10
  }
});

export default App