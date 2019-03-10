import { createAppContainer, createStackNavigator } from 'react-navigation'; 
import HomePageComponent from './src/components/HomePageComponent'
import VotesTabComponent from './src/components/VotesTabComponent'  
import PreviousResultsComponent from './src/components/PreviousResultsComponent'  

const AppNavigator = createStackNavigator({
    Home: {
      screen: HomePageComponent
    },
    Votes: {
      screen: VotesTabComponent
    },
    PreviousResults: {
      screen: PreviousResultsComponent
    }    
  }, {
    initialRouteName: 'Home'
  });

export default createAppContainer(AppNavigator);