import React, {Component} from 'react';
import { View, FlatList, Text } from 'react-native'; 
   
class VotesTab extends Component {    
  constructor(props) { 
    super(props);
    /*
     *  Main points:
        Store styling variables and headers into navigation folder etc. 
     */
    this.state = {
        RestaurantOptions: [{id: 1, name: "Restaurant 1"}, 
        { id: 2, name :"Restaurant 2" }, 
        { id: 3, name :"Restaurant 3" }] 
    }; 
  }  

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>  
        <FlatList 
            data={this.state.RestaurantOptions}
            renderItem={({item, index}) => (
                <RestaurantItem title={item.name}></RestaurantItem>
            )}
        />
      </View>
    );
  }  
}

const RestaurantItem = ({title}) => (
    <View>
        <Text>Yeah Brother! - {title}</Text>
    </View>
  );

export default VotesTab;