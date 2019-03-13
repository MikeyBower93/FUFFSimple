import React, {Component, Fragment} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';  
import PreviousRestaurantModel from '../models/PreviousRestaurantModel';
import { titleStyle } from '../styles/styles';
import PreviousItemComponent from './PreviousItemComponent';

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
        <View style={styles.outerContainer}> 
            <Text style={titleStyle}>Previous Results</Text>
            <FlatList  
                data={this.state.PreviousResults.sort((a, b) => (a.date > b.date) ? 1 : -1) }
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) => (  
                    <Fragment>
                        <View style={styles.gapStyle}>
                            <PreviousItemComponent date={item.date} place={item.place} voters={item.voters} />
                        </View>
                    </Fragment> 
            )} />  
        </View>
        );
      }
}

const styles = StyleSheet.create({ 
  outerContainer: {
    marginLeft:10, 
    marginRight:10
  }, 
  gapStyle: {
    marginTop:5, 
    marginBottom:5
  }
});