import React, {Component} from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class FuffButtonComponent extends Component {
    constructor(props) { 
        super(props);  
    }  

    render() {
        return (
        <View>
          <TouchableOpacity style={{backgroundColor:'red', width:'100%', height:50}} onPress={this.props.buttonClicked}>
            <TouchableOpacity style={{backgroundColor:'blue', width:'80%',height:50 }} onPress={this.props.buttonClicked}>
              <Text>{this.props.text}</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
        );
    } 
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    overflow: 'hidden',
    padding: 12,
    textAlign:'center'
  }
});