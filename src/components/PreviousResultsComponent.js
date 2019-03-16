import React, {Component, Fragment} from 'react';
import {View, Text, FlatList, ScrollView} from 'react-native';  
import PreviousRestaurantModel from '../models/PreviousRestaurantModel';
import { titleStyle, outerContainer, gapStyle } from '../styles/styles';
import PreviousItemComponent from './PreviousItemComponent';

export default class PreviousResultsComponent extends Component {
    constructor(props) { 
        super(props);  
        
        this.state = {
            PreviousResults: [],
            displayErrorMessage: false
        };
    }  

    async componentDidMount() {   
        try {            
            var response = await fetch('https://s3.eu-west-2.amazonaws.com/sauce-fuff/results.json');
            var responseJson = await response.json();

            //Map to model types, ensure the data integrity
            var data = responseJson.map((value) => {
                var modelWrapper = new PreviousRestaurantModel(value.place, new Date(Date.parse(value.date)));
    
                modelWrapper.voters = value.voters;
    
                return modelWrapper;
            }); 
            
            this.setState({
                PreviousResults: data
            });
        }
        catch(e) { 
            this.setState({
                displayErrorMessage: true
            });
        }
    }

    render() {
        return (
        <ScrollView style={outerContainer}>  
            <Text style={titleStyle}>Previous Results</Text>
            <Text style={{ color: 'red', height: this.state.displayErrorMessage ? 50: 0 }}>Cannot get previous data.
            </Text>
            <FlatList  
                data={this.state.PreviousResults.sort((a, b) => (a.date > b.date) ? 1 : -1) }
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) => (  
                    <Fragment>
                        <View style={gapStyle}>
                            <PreviousItemComponent date={item.date} place={item.place} voters={item.voters} />
                        </View>
                    </Fragment> 
            )} />  
        </ScrollView>
        );
      }
} 