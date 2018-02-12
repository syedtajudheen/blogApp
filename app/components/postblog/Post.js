import React,{Component} from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

class Post extends React.Component{
    constructor(props){
        super(props)
        this.state={
            'userId': '1',
            'title': '',
            'body': ''
        }
        this.onsubmit=this.onsubmit.bind(this);
    }
 
    onsubmit(){
        
        fetch('https://jsonprovider.herokuapp.com/posts/', {  
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userId: this.state.userId,
                title: this.state.title,
                body: this.state.body
            })
          })
          .then(response => Alert.alert('Sucessfully Posted!') )
         
    }
    static navigationOptions={
        title:'Post Blog'
    }
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Post your Blog</Text>
                <TextInput value={this.state.title} onChangeText={(title)=>this.setState({title})} style={styles.input} multiline = {true} numberOfLines = {3} underlineColorAndroid = "#16BCFF" placeholder="Title here..."/>
                <TextInput value={this.state.body} onChangeText={(body)=>this.setState({body})} style={styles.input} multiline = {true} numberOfLines = {3} underlineColorAndroid = "#16BCFF" placeholder="content here..."/>
                <Button onPress={this.onsubmit} title="Post it"/>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        margin:20,
    },
    title:{
        textAlign: 'center',
        fontSize: 20,
        marginBottom:20,
    },
    input:{
        marginBottom:20,
    }
})
export default Post