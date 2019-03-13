import React, {Component} from 'react';
import { View, FlatList, Image } from 'react-native';  
import FUFFButtonComponent from './FUFFButtonComponent';
import { avatarStyle } from '../styles/styles';

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
            
            <FlatList 
                style={{flexDirection:'column'}}   
                numColumns={30}
                extraData={this.props}
                keyExtractor={(item, index) => index.toString() }
                data={this.props.votes}  
                renderItem={({item, index}) => (
                    <Image
                        style={[avatarStyle, { marginLeft: -10 }]}
                        source={{uri:  `https://api.adorable.io/avatars/285/'${item}.png`}} />
                    )}/>    
            </FUFFButtonComponent>
            
        </View>
        );
      }
}