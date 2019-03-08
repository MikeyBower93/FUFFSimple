import React, {Component} from 'react';
import { Image, Text, View} from 'react-native';
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
          Hello World!
        </Icon.Button>
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
   
  UIUri() {
    return 'https://api.adorable.io/avatars/285/' + cuid() + ".png";
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