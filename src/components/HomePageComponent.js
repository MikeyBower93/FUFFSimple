import React, {Component} from 'react';
import { View, Image, StyleSheet } from 'react-native';  
import SimpleButton from '../components/SimpleButton';
import { backgroundStyle, blackButtonStyle  } from '../styles/styles'; 
 
export default class HomePageComponent extends Component {  
  render() {
    return (  
      <View style={[styles.mainView, backgroundStyle]}>
       <Image style={styles.logoStyle} source={require('../images/fuff.png')} />
        <View style={{width:'80%'}}>
         <SimpleButton
          text='Get Started'
          style={blackButtonStyle}
          buttonClicked={() => this.props.navigation.navigate('Tabs')} />
        </View>
      </View>
    );
  }
} 

const styles = StyleSheet.create({ 
    mainView: {
      flex: 1,  
      justifyContent: 'center', 
      alignItems: 'center' 
    },
    logoStyle: {
      aspectRatio: 0.5, 
      resizeMode: 'contain'
    }
});