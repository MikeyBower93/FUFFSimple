import React, {Component} from 'react';
import { View, FlatList, Image } from 'react-native'; 

export default class RestaurantItemComponent extends Component {
    constructor(props) { 
        super(props);  
    }   
    
    render() {
        return (
        <View>  
            <FlatList 
            style={{flexDirection:'column'}}
            numColumns={8}
            extraData={this.props}
            keyExtractor={(item, index) => index.toString() }
            data={this.props.votes}  
            renderItem={({item, index}) => (
                <Image
                    style={{width: 50, height: 50, borderRadius: 40, marginTop:5, marginBottom:5, marginLeft:5, marginRight:5}}
                    source={{uri:  `https://api.adorable.io/avatars/285/'${item}.png`}} />
                )}/> 
        </View>
        );
      }
}