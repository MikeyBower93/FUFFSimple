import React, {Component} from 'react';
import { Button, View } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
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

  Navigate(location) {
    //Navigate to different page based on name.
    this.props.navigation.dispatch(StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: location })
      ],
    }));
  }
 
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
          onPress={() => this.Navigate('Votes')}
        />
        <Button 
          title='Previous Results'
          color='#1e7aaa'  
          onPress={() => this.Navigate('PreviousResults')}
        />
      </View>
    );
  }
}