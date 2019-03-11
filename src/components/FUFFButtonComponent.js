import React, {Component} from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class FuffButtonComponent extends Component {
    constructor(props) { 
        super(props);  
    }  

    render() {
        return (
        <View style={styles.container}>
            <TouchableOpacity onPress={this.props.buttonClicked}>
            <Text style={styles.button}>{this.props.text}</Text>
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
    borderRadius: 25,
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    overflow: 'hidden',
    padding: 12,
    textAlign:'center'
  }
});