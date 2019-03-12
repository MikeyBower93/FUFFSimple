import React, {Component} from 'react';
import { Button, View } from 'react-native'; 
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'   
 
export default class HomePageComponent extends Component {
  //Create styling for component.
  static navigationOptions = {
    title: 'FUFF',
    headerStyle: {
      backgroundColor: '#1e7aaa',
      color: 'white'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }; 
 
  render() {
    return (  
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#f2faff' }}>
        <Icon
          name='food-variant'
          color='#85b7d1'
          size={150} />
        <Button 
          title='Lets Eat'
          color='#1e7aaa'  
          onPress={() => this.props.navigation.navigate('Votes')}
        /> 
      </View>
    );
  }
}