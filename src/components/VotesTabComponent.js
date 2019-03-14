import React, {Component} from 'react';
import { View, FlatList, Text } from 'react-native'; 
import cuid from 'cuid';
import _ from 'lodash'; 
import RestaurantItemComponent from './RestaurantItemComponent';
import RestaurantOptionModel from '../models/RestaurantOptionModel';
import SimpleButton from './SimpleButton';
import { textStyle, titleStyle, greyButtonStyle, yellowButtonStyle, outerContainer, gapStyle, subTitleStyle } from '../styles/styles';
import Overlay from 'react-native-modal-overlay';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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
    _.times(6, (_) => atomOptions.AddVote(cuid())); 

    return [
      minervaOption,
      bertsOption,
      atomOptions
    ];
  }
  
  selectOption(id, requiresPopup = true) {    
    var restaurantOptions = this.state.RestaurantOptions;
    var userIdentifier = this.state.userIdentifier;

    //Remove users already existing selection.
    restaurantOptions.forEach((value) => {  
      value.voters = _.remove(value.voters, (value) => {
        return value !== userIdentifier;
      });
    });
    
    //Find the item and add a vote.
    var restaurant = restaurantOptions.find((item) => item.id === id);
    restaurant.AddVote(userIdentifier);
 
    if(requiresPopup) {
      //Update items.
      this.setState({
        RestaurantOptions: restaurantOptions,
        optionSelected: true,
        selectedValue: restaurant.place
      });
    }
    else {
      this.setState({
        RestaurantOptions: restaurantOptions, 
      });
    }
  }
 
  selectRandomOption() {
    var restaurantOptions = this.state.RestaurantOptions;

    //Find a random item and select the option.
    var item = restaurantOptions[Math.floor(Math.random() * restaurantOptions.length)];

    this.selectOption(item.id, false);
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

    this.selectOption(newRestaurant.id, false);
  }

  totalVotes() {
    //Grab all the vote counts and add them together.
    return this.state.RestaurantOptions.map((item) => item.voters.length).reduce((total, num) => total + num);
  }

  render() {
    return (
      <View style={outerContainer}>    
        <Text style={titleStyle}>Votes</Text>
        <FlatList  
          data={this.state.RestaurantOptions.sort((a, b) => (a.voters.length <= b.voters.length) ? 1 : -1) }
          extraData={this.state}
          keyExtractor={(item, index) => index.toString() }
          renderItem={({item, index}) => (   
            <RestaurantItemComponent 
              style={gapStyle}
              title={item.place} 
              votes={item.voters} 
              totalVotes={this.totalVotes()}
              id={item.id}
              itemSelected={(id) => { this.selectOption(id) }} /> 
          )} />  

          <Text style={[gapStyle,textStyle]}>Feeling adventurous?</Text> 
          <SimpleButton style={[gapStyle, greyButtonStyle]} text="Surprise me!" buttonClicked={() => this.selectRandomOption() }/>

          <Text style={[gapStyle,textStyle]}>Don't like the available options?</Text> 
          <SimpleButton style={[gapStyle, yellowButtonStyle]} text="Add an option" buttonClicked={() => this.setState({ AddOptionVisible: true })}/>

          <Overlay 
            visible={this.state.optionSelected} 
            animationType="zoomIn" 
            onClose={() => this.setState({ optionSelected: false })} 
            containerStyle={{backgroundColor: 'rgba(0, 0, 0, 0.78)'}}
            childrenWrapperStyle={{backgroundColor: '#eee', borderRadius:10}}
            animationDuration={500} 
            closeOnTouchOutside>            
            <Icon 
              name='thumb-up' 
              size={30} 
              style={{color:'black', marginTop:20}} /> 
            <Text style={subTitleStyle}>Good Choice!</Text>
            <Text style={{fontSize:20, marginTop:10, marginBottom:10}}>Your vote has been added to:</Text>
            <Text style={{fontWeight:'bold', fontSize:20, color:'black', marginBottom:10}}>{this.state.selectedValue}</Text>
            <View style={{ width:'80%', marginBottom:20}}>
              <SimpleButton 
                style={yellowButtonStyle} 
                text="Close" 
                buttonClicked={() => this.setState({ optionSelected: false })} />
            </View>
          </Overlay>
      </View>
    );
  }  
}