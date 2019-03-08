import React, {Component} from 'react';
import { Button, Text, View} from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'  
import cuid from 'cuid'
 
class HomePage extends Component {
  Navigate(location) {
    this.props.navigation.dispatch(StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: location })
      ],
    }));
  }

  NewCuid() {
    return cuid();
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>  
        <Icon
          name="food-fork-drink"
          size={150}
        ></Icon>
        <Icon.Button
          name="food"
          size={30}
          backgroundColor="#3b5998"
          onPress={() => this.Navigate('Details')}>
          {this.NewCuid()}
        </Icon.Button>
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
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