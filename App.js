import {Icon} from 'expo';
import React from 'react';
import { AppRegistry, View, Text, Button, TouchableOpacity, Image, StyleSheet, FlatList, ImageBackground } from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import * as Progress from 'react-native-progress';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import GamificationHome from './Home.js'
import MissionView from './Missions.js'
import DetailsScreen from './DetailsScreen.js'
import Defis from './Defis.js'


const DrawNav = DrawerNavigator({
  Home: {
    screen: GamificationHome,
  },
  Missions: {
    screen: MissionView,
  },
  Defis:{
    screen:Defis,
  }
}
);

const MissionStack = StackNavigator({
  Missions: {
    screen: MissionView,
  },
  Details: {
      screen: DetailsScreen,
    },
  },
  {
  headerMode: 'none',
},
)

const DefisStack = StackNavigator({
  Defis: {
    screen: Defis,
  },
},
  {
  headerMode: 'none',
},
)



export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

const RootStack = StackNavigator({
  Home:{
    screen: GamificationHome,
  },
  DrawNav:{
    screen:DrawNav,
  },
  MissionStack:{
    screen:MissionStack,
  },
  DefisStack:{
    screen:DefisStack,
  }
},
  {
    initialRouteName: 'DrawNav',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#32ce7b',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  },
);

AppRegistry.registerComponent('App', () => App);
