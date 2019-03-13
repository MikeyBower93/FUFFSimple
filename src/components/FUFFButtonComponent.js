import React, {Component} from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class FuffButtonComponent extends Component {
    constructor(props) { 
        super(props);  
    }  
    
    render() {
        return ( 
          <View>
            <TouchableOpacity 
              style={styles.outerContainer} 
              onPress={this.props.buttonClicked}>
              <View 
                style={[styles.innerContainer, { width: `${this.props.percentage}%` }]} />
              <View style={styles.textContainer}>
                <Text style={styles.buttonText}>{this.props.text}</Text>  
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
  outerContainer: {
    width:'100%',  
    borderRadius: 5,
    flex:1,
    flexDirection: 'row',
    alignItems:'center', 
    backgroundColor: "#ffffff",
    shadowColor: "#000000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: {
      height: 1,
      width: 0
    },
    elevation: 1,
  },
  textContainer: {
    position:'absolute', 
    flex:1, 
    flexDirection: 'row', 
    justifyContent:'flex-start'
  },
  buttonText: {
    marginLeft: 15, 
    fontSize: 20, 
    color:'black'
  },
  additionalsContainer: {
    position:'absolute', 
    marginLeft:'80%' , 
    flex:1,
    flexDirection: 'row', 
    justifyContent:'flex-end'
  },
  innerContainer: { 
    backgroundColor:'yellow', 
    height:75, 
    borderRadius: 5
  }
});