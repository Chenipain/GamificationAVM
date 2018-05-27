import React from 'react';
import { AppRegistry, View, Text, Button, TouchableOpacity, Image, StyleSheet, FlatList, ImageBackground } from 'react-native';
import * as Progress from 'react-native-progress';

export default class Defis extends React.Component {

  static navigationOptions = {
    title: 'Defis',
  };

  render()
  {

    return (

        <FlatList
          data={[
            {key: '1', name: 'Defis Forme', desc: 'Faire du sport', progress: 20},
            {key: '2', name: 'Defis Marche', desc: 'Marcher 300km', progress: 67},
            {key: '3', name: 'Defis Nutrition', desc: 'Manger 4 Kebabs', progress: 40}
            ]}
            ItemSeparatorComponent= {() => {return (<View style={{height:1, width:"86%", backgroundColor: "#CED0CE", marginLeft: "14%"}}/>)}}
            renderItem={({item}) => <View style={{flexDirection:'row', marginTop:'5%', marginLeft:'4%'}}>

            <Image
                style={{height:80, width:80, borderRadius:40,}}
                source={require('./Challenge.png')}>
            </Image>
            <View style={{flexDirection:"column", marginLeft:"2%"}}>
            <Text style={{fontSize:17, fontWeight: 'bold'}}>{item.name}</Text>
            <Text>{item.desc}</Text>
            <View style={{marginTop:"5%"}}>
              <Progress.Bar progress={(item.progress / 100)}/>
            </View>
            </View>
            </View>}
          />
  );
  }
};
