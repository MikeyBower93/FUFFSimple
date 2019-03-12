import { createBottomTabNavigator, createDrawerNavigator, createAppContainer } from 'react-navigation';
import cuid from 'cuid';

import VotesTabComponent from './src/components/VotesTabComponent'; 
import PreviousResultsComponent from './src/components/PreviousResultsComponent';
import HomePageComponent from './src/components/HomePageComponent';
  
const TabsNavigator = createBottomTabNavigator({ 
  Votes: {
      screen: VotesTabComponent,
      params: {
          userIdentifier: cuid() 
      }
  },
  PreviousResults: {
      screen: PreviousResultsComponent
  }
}); 
 
const temp = createDrawerNavigator({
  Tabs: TabsNavigator,
  Home: {
    screen: HomePageComponent
  }
}, {
  initialRouteName: 'Home'
});

export default createAppContainer(temp);