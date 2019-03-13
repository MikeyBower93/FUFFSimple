import React, {Component} from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class FuffButtonComponent extends Component {
    constructor(props) { 
        super(props);  
    }  
    
    render() {
        return (
        <View style={styles.outerView}>
          <TouchableOpacity onPress={this.props.buttonClicked}>
            <View style={styles.outerButton}>
              <View style={styles.innerButton} onPress={this.props.buttonClicked}>
                <Text style={{marginLeft: 15, fontSize: 20, color:'black'}}>{this.props.text}</Text>  
              </View>  
              <View style={{flex:1, flexDirection: 'row', justifyContent:'flex-end', marginRight: 5}}>
                {this.props.children} 
              </View>
            </View> 
          </TouchableOpacity>
        </View>
        );
    } 
}

const styles = StyleSheet.create({
  outerView: {
    backgroundColor: "#ffffff",
    borderRadius: 5,
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 5,
    shadowOffset: {
      height: 1,
      width: 0
    },
    elevation: 2,
  },
  outerButton: {
    width:'100%', 
    height:75, 
    borderRadius: 5,
    flex:1,
    flexDirection: 'row',
    alignItems:'center'
  },
  innerButton: { 
    backgroundColor:'yellow',
    width:'80%',
    height:75, 
    borderRadius: 5,
    flex: 1, 
    flexDirection: 'row', 
    justifyContent:'flex-start',
     alignItems:'center'
  }
});