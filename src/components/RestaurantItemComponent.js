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
        <View style={this.props.style}> 
            <FUFFButtonComponent 
                text={this.props.title}
                percentage={this.props.totalVotes === 0 ? 0 : (this.props.votes.length / this.props.totalVotes) * 100}
                buttonClicked={(item) => {this.props.itemSelected(this.props.id)}}>
                <RestaurantVotesComponent votes={this.props.votes} />    
            </FUFFButtonComponent>
            
        </View>
        );
      }
}