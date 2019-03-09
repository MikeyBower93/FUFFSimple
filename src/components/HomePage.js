import React, {Component} from 'react';
import { Button, View } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'   
 
class HomePage extends Component {
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
      </View>
    );
  }
}

export default HomePage;