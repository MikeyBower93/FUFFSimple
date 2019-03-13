import React, {Component, Fragment} from 'react';
import {View, Text, FlatList, Image} from 'react-native';  
import PreviousRestaurantModel from '../models/PreviousRestaurantModel';
import { titleStyle, avatarStyle } from '../styles/styles';

export default class PreviousResultsComponent extends Component {
    constructor(props) { 
        super(props);  
        
        this.state = {
            PreviousResults: []
        };
    }  

    async componentDidMount() {   
        var response = await fetch('https://s3.eu-west-2.amazonaws.com/sauce-fuff/results.json');
        var responseJson = await response.json();

        //Map to object types, ensure the data integrity
        var data = responseJson.map((value) => {
            var modelWrapper = new PreviousRestaurantModel(value.place, new Date(Date.parse(value.date)));

            modelWrapper.voters = value.voters;

            return modelWrapper;
        }); 
        
        this.setState({
            PreviousResults: data
        });
    }

    render() {
        return (
        <View> 
            <Text style={titleStyle}>Previous Results</Text>
            <FlatList  
                data={this.state.PreviousResults.sort((a, b) => (a.date > b.date) ? 1 : -1) }
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) => (   
                    <Fragment>
                        <Text>{item.date.toString()} - {item.place}</Text>
                        <FlatList 
                            style={{flexDirection:'column'}}  
                            numColumns={30}
                            extraData={this.state}
                            keyExtractor={(item, index) => index.toString() }
                            data={item.voters}  
                            renderItem={({item, index}) => (
                                <Image
                                    style={[avatarStyle, { marginLeft:5 }]}
                                    source={{uri:  `https://api.adorable.io/avatars/285/'${item}.png`}} />
                                )}/> 
                    </Fragment>
            )} />  
        </View>
        );
      }
}