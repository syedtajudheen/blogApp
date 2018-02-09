import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './app/components/home/Home'
import Post from './app/components/postblog/Post'
import { StackNavigator } from 'react-navigation';

const Navigation = StackNavigator ({
  Home: {screen: Home},
  Post: {screen: Post}
})

export default class App extends React.Component {
  render() {
    return (
      <Navigation/>
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

