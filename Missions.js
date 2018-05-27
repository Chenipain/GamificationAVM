import {Icon} from 'expo';
import React from 'react';
import { AppRegistry, View, Text, Button, TouchableOpacity, Image, StyleSheet, FlatList, ImageBackground } from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import { StackNavigator } from 'react-navigation';
import * as Progress from 'react-native-progress';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import GamificationHome from './Home.js'
import DetailsScreen from './DetailsScreen.js'

export default class MissionView extends React.Component {

  static navigationOptions = {
    title: 'Missions',
  };

  render() {
    return (

      <View style={{ flex: 1, marginLeft: "9%", marginRight:"9%", marginTop:"4%", marginBottom:"8%", flexDirection: "column"}}>

      <FlatList
      numColumns={2}
      data={[

        {key: 1, progress: 34,
          name: 'Lorem',
      desc: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n\'a pas fait que survivre cinq siècles, mais s\'est aussi adapté à la bureautique informatique, sans que son contenu n\'en soit modifié. \nIl a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.'},

       {key: 2, progress: 65,
         name: 'Ipsum',
        desc:'Quisque eu eros scelerisque, feugiat mi ac, pharetra risus. Curabitur gravida, risus sed vestibulum porta, purus velit vehicula augue, eu venenatis urna lacus at enim. \nMorbi tempor pulvinar diam, rhoncus aliquet magna posuere quis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae Aliquam erat volutpat. Aliquam non gravida arcu, ut sodales lacus. Nam velit lectus, viverra id aliquet eget, euismod nec elit. Vestibulum et efficitur libero. Nam eget tellus vulputate, commodo lacus id, semper leo. \nPhasellus congue leo elit, lobortis accumsan purus convallis quis. Nullam eu sagittis ipsum, vitae ornare augue. Donec eget nibh metus.\n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida nec sapien sed pellentesque. Curabitur nec turpis eget dui suscipit varius nec sit amet sem. Praesent quis varius justo. Etiam a mattis nisl. Pellentesque semper sit amet magna eu congue. Cras ultrices odio quis accumsan cursus. Proin dignissim ex a lacus dapibus, sed aliquet odio porttitor. Quisque molestie sapien id sollicitudin tempor.\n  Curabitur augue ligula, bibendum eu neque eget, vehicula euismod magna. Phasellus auctor elit ac massa finibus ultrices. Vivamus tellus mauris, consectetur id neque et, aliquet bibendum orci. Morbi id placerat urna, ut hendrerit sem. Nam vehicula tellus lobortis, facilisis sem at, egestas orci. Vestibulum sollicitudin odio ex, eget efficitur quam molestie sed. Quisque eget nisi eget velit bibendum varius vitae et turpis. Nunc fringilla sagittis velit. Sed arcu quam, pharetra eu ligula nec, porttitor facilisis purus. Nullam quis efficitur purus. Quisque vitae accumsan purus, sed vehicula mauris. Fusce sollicitudin ex purus, in cursus orci iaculis non. Maecenas imperdiet dapibus tellus, quis commodo urna fermentum sit amet. '},

         {key: 3, progress: 78, name: "Sanofi", desc:'Youpi'}, {key: 4, progress: 3, name:"Faim", desc:'Foobar'}, {key: 5, progress: 21, name: 'Truc', desc:'Super Genial'}, {key: 6, progress: 71, name: 'Truc', desc:'Super Genial'}, {key: 7, progress: 32, name: 'Truc', desc:'Super Genial'}, {key: 8, progress: 44, name: 'Truc', desc:'Super Genial'}, {key: 9, progress: 98, name: 'Truc', desc:'Super Genial'}]}
      renderItem={({item}) => <View style ={{marginLeft: "7%", marginRight: "7%", marginTop: "5%"}}>


      <View style={{borderRadius: 56, overflow: 'hidden'}}>
       <ImageBackground
          style={{height:112,
                  width: 112,
                  borderRadius: 56}}

          source={require('./plante.jpeg')}
        >
        <AnimatedCircularProgress rotation= {0} size={112} width={4} fill={item.progress} tintColor="#00e0ff" backgroundColor="#3d5975"/>
        </ImageBackground>
        </View>
        <Button
          title={item.name}
          onPress={() => {
           this.props.navigation.navigate('Details', {
             name: item.name,
             desc: item.desc,
             progress: item.progress,
           });
         }}
        />
        </View>}
      />

      </View>
    );
  }
}
