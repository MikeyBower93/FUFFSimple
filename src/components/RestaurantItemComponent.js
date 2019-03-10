import React, {Component} from 'react';
import { View, FlatList, Image, Button } from 'react-native'; 
import RestaurantVotesComponent from './RestaurantVotesComponent'

export default class RestaurantItemComponent extends Component {
    constructor(props) { 
        super(props);  
    }   
    
    render() {
        return (
        <View> 
            <Button 
                title={this.props.title}
                onPress={(item) => {this.props.itemSelected(this.props.id)}} /> 
            <RestaurantVotesComponent votes={this.props.votes} />
        </View>
        );
      }
}