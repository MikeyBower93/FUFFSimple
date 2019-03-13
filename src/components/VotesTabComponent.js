import React, {Component} from 'react';
import { View, FlatList, Button, Text } from 'react-native'; 
import cuid from 'cuid'  
import _ from 'lodash'   
import RestaurantItemComponent from './RestaurantItemComponent' 
import RestaurantOptionModel from '../models/RestaurantOptionModel'  
import Dialog from 'react-native-dialog'

export default class VotesTabComponent extends Component {    
  constructor(props) { 
    super(props); 
    
    this.state = {
      RestaurantOptions: this.generateInitialData(),
      AddOptionVisible: false,
      userIdentifier: props.navigation.state.params.userIdentifier
    }; 
  }  

  generateInitialData() {
    //Create initial data as we are not using a back end yet.
    var minervaOption = new RestaurantOptionModel('Minerva');
    _.times(5, (_) => minervaOption.AddVote(cuid())); 

    var bertsOption = new RestaurantOptionModel('Berts');
    _.times(3, (_) => bertsOption.AddVote(cuid())); 

    var atomOptions = new RestaurantOptionModel('Atom');
    _.times(2, (_) => atomOptions.AddVote(cuid())); 

    return [
      minervaOption,
      bertsOption,
      atomOptions
    ];
  }
  
  selectOption(id) {    
    var restaurantOptions = this.state.RestaurantOptions;
    var userIdentifier = this.state.userIdentifier;

    //Remove users already existing selection.
    restaurantOptions.forEach((value) => {  
      value.voters = _.remove(value.voters, (value) => {
        return value !== userIdentifier;
      });
    });
    
    //Find the item and add a vote.
    restaurantOptions.find((item) => item.id === id).AddVote(userIdentifier);
 
    //Update items.
    this.setState({
      RestaurantOptions: restaurantOptions
    });
  }
 
  selectRandomOption() {
    var restaurantOptions = this.state.RestaurantOptions;

    //Find a random item and select the option.
    var item = restaurantOptions[Math.floor(Math.random() * restaurantOptions.length)];

    this.selectOption(item.id);
  }

  AddOption() {
    var restaurants = this.state.RestaurantOptions;

    var newRestaurant = new RestaurantOptionModel(this.state.dialogValue); 

    restaurants.push(newRestaurant);
 
    //Add new option and close the modal.
    this.setState({
      AddOptionVisible: false,
      RestaurantOptions: restaurants
    });

    this.selectOption(newRestaurant.id);
  }

  totalVotes() {
    return this.state.RestaurantOptions.map((item) => item.voters.length).reduce((total, num) => total + num);
  }

  render() {
    return (
      <View style={{marginLeft:10, marginRight:10}}>    
        <Text style={{fontSize: 50, fontWeight: 'bold', color:'black' }}>Votes</Text>
        <FlatList  
          data={this.state.RestaurantOptions.sort((a, b) => (a.voters.length <= b.voters.length) ? 1 : -1) }
          extraData={this.state}
          keyExtractor={(item, index) => index.toString() }
          renderItem={({item, index}) => (   
            <RestaurantItemComponent 
              style={{marginTop:5, marginBottom:5}}
              title={item.place} 
              votes={item.voters} 
              totalVotes={this.totalVotes()}
              id={item.id}
              itemSelected={(id) => { this.selectOption(id) }} /> 
          )} />  

          <Button title='Suprise Me!' onPress={() => this.selectRandomOption() }/>
          <Button title='Add Option' onPress={() => this.setState({ AddOptionVisible: true })}/>   

          <Dialog.Container visible={this.state.AddOptionVisible}>
            <Dialog.Title>Add Restaurant</Dialog.Title>
            <Dialog.Description>
              Where would you like to add?
            </Dialog.Description>
            <Dialog.Input onChangeText={(value) => this.setState({ dialogValue: value })}></Dialog.Input>
            <Dialog.Button label="Cancel" onPress={() => this.setState({ AddOptionVisible: false })} />
            <Dialog.Button label="Add" onPress={() => this.AddOption()} />
        </Dialog.Container>
      </View>
    );
  }  
}