import React, {Component} from 'react';
import { View, Text} from 'react-native';  

export default class RestaurantItemComponent extends Component {
    constructor(props) { 
        super(props);  
        
        this.state = {
            PreviousResults: ''
        };
    }  

    async componentDidMount() {  
        var response = await fetch('https://s3.eu-west-2.amazonaws.com/sauce-fuff/results.json');
        var responseJson = await response.json();

        this.setState({
            PreviousResults: JSON.stringify(responseJson)
        });
    }

    render() {
        return (
        <View> 
            <Text>{this.state.PreviousResults}</Text>
        </View>
        );
      }
}