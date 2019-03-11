import React, {Component} from 'react';
import { View, Button } from 'react-native'; 
import RestaurantVotesComponent from './RestaurantVotesComponent'
import FUFFButtonComponent from './FUFFButtonComponent'

export default class RestaurantItemComponent extends Component {
    constructor(props) { 
        super(props);  
    }   
    
    render() {
        return (
        <View> 
            <FUFFButtonComponent 
                text={this.props.title}
                buttonClicked={(item) => {this.props.itemSelected(this.props.id)}} /> 
            <RestaurantVotesComponent votes={this.props.votes} />
        </View>
        );
      }
}