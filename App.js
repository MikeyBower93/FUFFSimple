import React, {Component} from 'react';
import { Button, Image, Text, View} from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'  
import cuid from 'cuid'
 
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
          onPress={() => this.Navigate('Details')}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
   
  UIUri() {
    return 'https://api.adorable.io/avatars/285/' + cuid() + '.png';
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Image
          style={{width: 50, height: 50}}
          source={{uri: this.UIUri() }}></Image>
      </View>
    );
  }  
}

const AppNavigator = createStackNavigator({
    Home: {
      screen: HomePage
    },
    Details: {
      screen: DetailsScreen
    },
  }, {
    initialRouteName: 'Home'
  });

export default createAppContainer(AppNavigator);