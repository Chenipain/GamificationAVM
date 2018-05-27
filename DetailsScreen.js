import {Icon} from 'expo';
import React from 'react';
import { AppRegistry, View, Text, Button, TouchableOpacity, Image, StyleSheet, FlatList, ImageBackground } from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import { StackNavigator } from 'react-navigation';
import * as Progress from 'react-native-progress';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import GamificationHome from './Home.js'
import MissionView from './Missions.js'

export default class DetailsScreen extends React.Component {
  static navigationOptions = ({navigation}) => {const {params} = navigation.state; return {title: params.name,}};



  render() {

  const { params } = this.props.navigation.state;
  const name = params ? params.name : null;
  const desc = params ? params.desc : null;
  const progress = params ? params.progress: null;

    return (
      <ScrollView style={{ flex: 1, flexDirection: 'column', marginTop:'3%'}}>
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>

      <Image
         style={{height:112,
                 width: 112,
                 borderRadius: 56}}

         source={require('./plante.jpeg')}
       >
       </Image>
       </View>
        <View style={{flexDirection: 'row', justifyContent:'center', marginTop: '2%'}}>
        <Progress.Bar color="#32cd32" progress= {(progress / 100)} width={230} height={10}/>
        </View>
        <View style = {{flexDirection: 'row', justifyContent: 'center', marginTop:'3%'}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Description</Text>
        </View>
        <View style = {{flexDirection: 'row', justifyContent: 'center', marginTop:'3%', marginLeft:'5%', marginRight:'5%'}}>
        <Text style= {{fontSize: 15}}>{desc}</Text>
        </View>
      </ScrollView>
    );
  }
}
