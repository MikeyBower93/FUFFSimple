import React from 'react';
import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({ 
    backgroundStyle: { 
        backgroundColor: '#EDD70D',
    },
    textStyleNoColor: { 
        fontSize: 20, 
        backgroundColor: 'rgba(0,0,0,0)'
    },
    textStyle: { 
        fontSize: 20, 
        color:'black' 
    },
    titleStyle: {
        fontSize: 55, 
        marginBottom:20, 
        fontWeight: 'bold', 
        color:'black' 
    },
    subTitleStyle: {
        fontSize: 30, 
        marginBottom:20, 
        fontWeight: 'bold', 
        color:'black' 
    },
    avatarStyle: {
        width: 30, 
        height: 30,
        borderRadius: 40
    }, 
    greyButtonStyle: {
        backgroundColor: '#2E2E2E',
        color: 'white'
    },
    blackButtonStyle: {
        backgroundColor: 'black',
        color: 'white'
    },
    yellowButtonStyle: {
        backgroundColor: '#EDD70D',
        color:'black'
    },
    yellowStackButton: { 
        color: '#EDD70D',
        fontWeight:'bold', 
    },
    normalTextStyle: {
        fontSize:20, 
        marginTop:10,
        marginBottom:10
    },
    shadowStyle: {
        width:'100%',  
        borderRadius: 5,
        flex:1,
        flexDirection: 'row',
        alignItems:'center', 
        backgroundColor: "#ffffff",
        shadowColor: "#000000",
        shadowOpacity: 0.1,
        shadowRadius: 5,
        shadowOffset: {
          height: 1,
          width: 0
        },
        elevation: 1,
    }, 
    outerContainer: {
        marginLeft:10, 
        marginRight:10
    },
    gapStyle: {
        marginTop:5, 
        marginBottom:5
    }
});