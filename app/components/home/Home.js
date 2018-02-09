import React,{Component} from 'react';
import {View,Text,StyleSheet,ListView,Button,ScrollView} from 'react-native';
import Post from '../postblog/Post'

export default class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            posts:[]
        }
    }
    static navigationOptions={
        title:'BlogSpot'
    }
    componentDidMount = async () => {
        try {
          const response = await fetch('https://jsonprovider.herokuapp.com/posts?sort=createdAt%20DESC&limit=15')
          const posts = await response.json()
          this.setState({ posts})
        } catch (e) {
          this.setState({ error: true})
        }
      }
    render(){
        const {navigate} = this.props.navigation
        return(
            <ScrollView>
                <Button title="Post your blog here" onPress={()=>navigate('Post')}/>
                <View  style={styles.rows}>
                    {this.state.posts.map((post, i) =>  {
                        return( 
                            <View style={styles.lists} key={i}>
                            <Text style={styles.title}>{post.title}</Text> 
                            <Text flex="end" style={styles.body}>{post.body}</Text>
                            </View> 
                        )}
                    )}    
                </View>
            </ScrollView>
        )
    }
}

const styles=StyleSheet.create({
  title:{
      fontSize: 16,
      fontWeight: 'bold'
  },
  body:{
    textAlign: 'auto'
  },
  lists:{
    margin: 20
  },
  rows:{
      flex:1,
  }
})
