import React, {Component, Fragment} from 'react'; 
import { Text, View, TouchableOpacity, TextInput } from 'react-native';   
import { titleStyle, yellowStackButton,normalTextStyle,outerContainer } from '../styles/styles';  
import RestaurantOptionModel from '../models/RestaurantOptionModel';
import {dataStore} from '../datastores/RestaurantOptions';

export default class AddOptionComponent extends Component {  

    static navigationOptions = ({ navigation }) => ({
        headerBackTitle: 'Back',
        headerRight:  ( 
            <Fragment>
              <TouchableOpacity onPress={navigation.getParam('save')}>
                <Text style={[yellowStackButton, { marginRight:10 }]}>Done</Text>
            </TouchableOpacity>
            </Fragment>
        )
    });

    constructor(props) { 
        super(props);  

        this.state = {
            text: ''
        }
    }  

    componentDidMount() {
        var _that = this;

        this.props.navigation.setParams({
            save: () => { 
                var newRestaurant = new RestaurantOptionModel(_that.state.text); 
             
                dataStore.push(newRestaurant);

                _that.props.navigation.state.params.refresh();

                _that.props.navigation.goBack(null);
            }
        });
    } 

    render() {
        return (  
            <View style={outerContainer}> 
                <Text style={titleStyle}>Add Choice</Text>
                <Text style={[normalTextStyle,{ color:'black' }]}>Where would you like to eat?</Text>
                <TextInput 
                    clearButtonMode='always'
                    style={{borderColor:'grey', borderRadius: 5, borderWidth: 0.4}}
                    onChangeText={(text) => { this.setState({text}) }}></TextInput>
            </View>
        );
    }
}