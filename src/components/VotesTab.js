import React, {Component} from 'react';
import { View, FlatList, Text, Image } from 'react-native'; 
import cuid from 'cuid'  
import _  from 'lodash' 

class VotesTab extends Component {    
  constructor(props) { 
    super(props);
    /*
     *  Main points:
        Store styling variables and headers into navigation folder etc. 
     */
    this.state = {
        RestaurantOptions: [this.generateRestaurantOption(1, "Minerva", 3),
            this.generateRestaurantOption(2, "Berts", 2),
            this.generateRestaurantOption(3, "Atom", 1)] 
    }; 
  }  

  generateRestaurantOption(id, name, avatarCount) {  
      
    var avatars = _.times(avatarCount, (number) => {
        var newId = cuid();
        return {
            uri: `https://api.adorable.io/avatars/285/'${newId}.png`
        }
    });

    return {
        id: id,
        name: name,
        avatars: avatars
    }
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>  
        <FlatList 
            data={this.state.RestaurantOptions}
            renderItem={({item, index}) => (
                <RestaurantItem title={item.name} avatars={item.avatars}></RestaurantItem>
            )}
        />
      </View>
    );
  }  
}

class RestaurantItem extends Component {
    constructor(props) { 
        super(props);  
      }  

      render() {
          return (
            <View>
                <Text>Yeah Brother! - {this.props.title}, {this.props.avatars.length}</Text>
                <FlatList
                    data={this.props.avatars}
                    renderItem={({item, index}) => (
                        <Image
                            style={{width: 50, height: 50}}
                            source={{uri: item.uri }}></Image>
                    )}/>
            </View>
          );
      }
}

/*
const RestaurantItem = ({title, avatars}) => (
    <View>
        <Text>Yeah Brother! - {title}, {avatars}</Text>
        <FlatList
            data={avatars}
            renderItem={({item, index}) => (
                <Image
                    style={{width: 50, height: 50}}
                    source={{uri: item.uri }}></Image>
            )}/>
    </View>
  );
*/

export default VotesTab;