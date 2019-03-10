import React, {Component} from 'react';
import { View, FlatList, Image, Button } from 'react-native'; 

export default class RestaurantItemComponent extends Component {
    constructor(props) { 
        super(props);  
    }  

    render() {
        return (
        <View> 
            <Button 
            title={this.props.title}
            onPress={(item) => {this.props.itemSelected(this.props.id)}} /> 
            <FlatList 
            style={{flexDirection:'column'}}
            numColumns={8}
            extraData={this.props}
            keyExtractor={(item, index) => index.toString() }
            data={this.props.votes }  
            renderItem={({item, index}) => (
                <Image
                    style={{width: 50, height: 50}}
                    source={{uri: item.avatarUri}} />
                )}/> 
        </View>
        );
      }
}