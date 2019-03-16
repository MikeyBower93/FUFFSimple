import React, {Component} from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { textStyleNoColor } from '../styles/styles'

export default class SimpleButton extends Component {
    constructor(props) { 
        super(props);  
    }  
    
    render() {
        return ( 
          <View>
            <TouchableOpacity  
              style={[this.props.style, styles.buttonStyling]} 
              onPress={this.props.buttonClicked}>  
              <Text style={[this.props.style, textStyleNoColor]}>{this.props.text}</Text>  
            </TouchableOpacity>
          </View>  
        );
    } 
}
 
const styles = StyleSheet.create({ 
    buttonStyling: {
      width:'100%',   
      borderRadius: 35,
      height: 60,
      justifyContent: "center",
      alignItems: "center"
    }
  });