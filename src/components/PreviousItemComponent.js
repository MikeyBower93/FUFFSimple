import React, {Component, Fragment} from 'react';
import {View, Text, FlatList, Image } from 'react-native';   
import { textStyle, avatarStyle, shadowStyle } from '../styles/styles';
import dateFormat from 'dateformat';
import FUFFButtonComponent from './FUFFButtonComponent';

export default class PreviousItemComponent extends Component {
    constructor(props) { 
        super(props);
    }   
    
    render() {
        return (
        <View>  
            <Text style={textStyle}>{dateFormat(this.props.date, 'dddd dS mmmm')}</Text>
            <FUFFButtonComponent percentage={100} text={this.props.place}></FUFFButtonComponent>
            <View style={[shadowStyle, { height:75 }]}>
                <FlatList 
                    style={{flexDirection:'column'}}  
                    numColumns={30}
                    extraData={this.state}
                    keyExtractor={(item, index) => index.toString() }
                    data={this.props.voters}  
                    renderItem={({item, index}) => ( 
                        <Image
                            style={[avatarStyle, { marginLeft:5 }]}
                            source={{uri:  `https://api.adorable.io/avatars/285/'${item}.png`}} /> 
                    )}/>  
                </View>
        </View>
        );
      }
}