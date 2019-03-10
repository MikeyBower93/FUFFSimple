import React, {Component} from 'react';
import { View, FlatList, Text, Image, Button } from 'react-native'; 
import cuid from 'cuid'  
import _ from 'lodash'  

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
          this.generateRestaurantOption(3, "Atom", 4)],
      SelectedOption: 'Lul'
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
    };
  }

  selectOption(id) {
    var newId = cuid();

    var restaurantOptions = this.state.RestaurantOptions;

    restaurantOptions.filter((item) => {
      return item.id === id;
    })[0].avatars.push({ 
      uri: `https://api.adorable.io/avatars/285/'${newId}.png`
    });

    //Is this necessary
    this.setState({
      RestaurantOptions: restaurantOptions
    });
  }
 
  render() {
    return (
      <View>  
        <FlatList  
          data={this.state.RestaurantOptions}
          extraData={this.state}
          keyExtractor={(item, index) => index.toString() }
          renderItem={({item, index}) => (   
            <RestaurantItem 
              title={item.name} 
              avatars={item.avatars} 
              id={item.id}
              itemSelected={(id) => { this.selectOption(id) }} />
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
              <Button 
                title={this.props.title}
                onPress={(item) => {this.props.itemSelected(this.props.id)}} /> 
              <FlatList 
                horizontal={true}
                extraData={this.props}
                keyExtractor={(item, index) => index.toString() }
                data={this.props.avatars}  
                renderItem={({item, index}) => (
                  <Image
                      style={{width: 50, height: 50}}
                      source={{uri: item.uri}} />
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