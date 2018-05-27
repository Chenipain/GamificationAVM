import React from 'react';
import { AppRegistry, View, Text, Button, TouchableOpacity, Image, StyleSheet, FlatList, ImageBackground } from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {DrawerNavigator} from 'react-navigation';
import * as Progress from 'react-native-progress';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import MissionView from './Missions.js';

export default class GamificationHome extends React.Component {

  static navigationOptions = {
    title: 'Mucopilote'
  };

  render(){
    return(
    <View style={{flexDirection:'column', justifyContent:'center', alignItems:'center', marginTop:'35%'}}>
    <Image style={{height:180,
            width: 180,
            borderRadius: 90}}
            source={require('./PoumonsIcone.jpg')}/>
    </View>
    )
}
};