import React, {Component} from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { textStyle, backgroundStyle, shadowStyle } from '../styles/styles'

export default class FuffButtonComponent extends Component {
    constructor(props) { 
        super(props);  
    }  
    
    render() {
        return ( 
          <View>
            <TouchableOpacity 
              style={shadowStyle} 
              onPress={this.props.buttonClicked}>
              <View 
                style={[backgroundStyle, styles.innerContainer, { width: `${this.props.percentage}%` }]} />
              <View style={styles.textContainer}>
                <Text style={[textStyle, styles.buttonText]}>{this.props.text}</Text>  
              </View>
              <View style={styles.additionalsContainer}>
                {this.props.children} 
              </View>          
            </TouchableOpacity>
          </View>  
        );
    } 
}

const styles = StyleSheet.create({  
  textContainer: {
    position:'absolute', 
    flex:1, 
    flexDirection: 'row', 
    justifyContent:'flex-start'
  },
  buttonText: {
    marginLeft: 15
  },
  additionalsContainer: {
    position:'absolute', 
    marginLeft:'80%' , 
    flex:1,
    flexDirection: 'row', 
    justifyContent:'flex-end'
  },
  innerContainer: {  
    height:75, 
    borderRadius: 5
  }
});