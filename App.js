import { createAppContainer, createStackNavigator } from 'react-navigation'; 
import HomePageComponent from './src/components/HomePage'
import HomeTabComponent from './src/components/VotesTab'  

const AppNavigator = createStackNavigator({
    Home: {
      screen: HomePageComponent
    },
    Votes: {
      screen: HomeTabComponent
    },
  }, {
    initialRouteName: 'Home'
  });

export default createAppContainer(AppNavigator);