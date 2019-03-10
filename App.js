import { createAppContainer, createStackNavigator } from 'react-navigation'; 
import HomePageComponent from './src/components/HomePageComponent'
import VotesTabComponent from './src/components/VotesTabComponent'  

const AppNavigator = createStackNavigator({
    Home: {
      screen: HomePageComponent
    },
    Votes: {
      screen: VotesTabComponent
    },
  }, {
    initialRouteName: 'Home'
  });

export default createAppContainer(AppNavigator);