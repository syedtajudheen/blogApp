import React,{Component} from 'react';
import {View,Text,StyleSheet,ListView,Button,ScrollView} from 'react-native';
import Post from '../postblog/Post'
import { fetchpost } from '../../action/action'
import { connect } from 'react-redux'

class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            posts:[]
        }
    }
    static navigationOptions={
        title:'BlogSpot'
    }
    componentDidMount () {
      this.props.dispatch(fetchpost())
      }
   
    render(){
        console.log(this.props.posts)
        const {navigate} = this.props.navigation
        return(
            <ScrollView>
                <Button title="Post your blog here" onPress={()=>navigate('Post')}/>
                <View  style={styles.rows}>
                    {this.props.posts.map((post, i) =>{
                        return( 
                            <View style={styles.lists} key={i}>
                                <Text style={styles.title}>{post.title}</Text> 
                                <Text style={styles.body}>{post.body}</Text>
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

function mapStateToProps(state) {
    return {
      posts: state.posts
    }
}

export default connect(mapStateToProps)(Home)
  