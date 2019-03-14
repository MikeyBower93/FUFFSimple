import React, {Fragment} from 'react';
import { Text, TouchableOpacity } from 'react-native';  
import { createBottomTabNavigator, createDrawerNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import { yellowStackButton } from './src/styles/styles';
import cuid from 'cuid';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import VotesTabComponent from './src/components/VotesTabComponent'; 
import PreviousResultsComponent from './src/components/PreviousResultsComponent';
import HomePageComponent from './src/components/HomePageComponent';
import AddOptionComponent from './src/components/AddOptionComponent';
  
const tabsNavigator = createBottomTabNavigator({ 
  Votes: {
    screen: VotesTabComponent, 
    navigationOptions: { 
      tabBarLabel: 'Votes',
      tabBarIcon: ({ tintColor }) => (
        <Icon name='check-circle-outline' size={30} style={{color:'black'}}/>
      )
    },
    params: {
        userIdentifier: cuid() 
    }
  },
  PreviousResults: {
    screen: PreviousResultsComponent, 
    navigationOptions: { 
      tabBarLabel: 'Results',
      tabBarIcon: ({ tintColor }) => (
        <Icon name='calendar' size={30} style={{color:'black'}} />
      )
    },
  }
}, {
  tabBarOptions: { 
    labelStyle: {
      fontSize: 20,
      color: 'black'
    },
    style: {
      height: 65 
    },
  }
}); 
 
const stackNavigator = createStackNavigator({
  Tabs: tabsNavigator, 
  AddOption: {
    screen: AddOptionComponent
  }
});
 
const mainNavigator = createDrawerNavigator({
  Tabs: stackNavigator,
  Home: {
    screen: HomePageComponent
  }}, {
  initialRouteName: 'Home'
});

export default createAppContainer(mainNavigator);