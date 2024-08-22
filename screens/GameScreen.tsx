import React, { useState } from 'react';
import {
  Pressable,
  StyleSheet,
    Text,
    Image,
  View,
  GestureResponderEvent,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './LaunchScreen';
import LinearGradient from 'react-native-linear-gradient';
import { opacity } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';


function GameScreen() {
  const gameSquareSide : number = 117;
  const [player,setPlayer] = useState(1);
  const [hit_squares, set_square_hit] = useState([1,0,0,0,0,0,0,0,0])
  const handlePress = (event:GestureResponderEvent) => {
    // Get the touch location from the event
    const { locationX, locationY } = event.nativeEvent;
    console.log("the cell is "+ getCell(locationX,locationY,gameSquareSide))
    updateCell(getCell(locationX,locationY,gameSquareSide))
  };
  const updateCell = (num:number) => {
    console.log("hit squares are :" + hit_squares)
    setPlayer(player == 0 ? 1 : 0)
    set_square_hit(hit_squares.map((c,i) => {
      if (i == num) {
        return c==0?1:0;
      }
      return 1;
    }));
  }
  const getCell = (x:number,y:number,side:number) => {
    if (x==0 && y==0) {
      return 0;
    }
    if (x==0) {
      return Math.floor(y/side);
    }
    if (y==0) {
      return Math.floor(x/side)*3;
    }
    return Math.floor(x/side) + Math.floor(y/side)*3;
  }

  const getButton= (num:number):string =>{
    if(hit_squares[num] == 1) {
      if (player == 1) {
        return "StateX.png"
      }
    }
    return "StateO.png"
  }
  return (
    <SafeAreaView>
      <LinearGradient colors={["#00D2FF","#3A7BD5"]}>
        <View style={styles.rootContainer}>
          <Text style={styles.title}>X's Turn</Text>
          <Pressable onPress={handlePress}>
          <Image style={[styles.gameTile,{top:50,left:30, opacity:hit_squares[0]}]} source={require("../images/StateO.png")}></Image>
          <Image style={[styles.gameTile,{top:50,left:150, opacity:hit_squares[0]}]} source={require("../images/StateO.png")}></Image>
          <Image style={[styles.gameTile,{top:50,left:266, opacity:hit_squares[0]}]} source={require("../images/StateX.png")}></Image>
          <Image style={[styles.gameTile,{top:167,left:30, opacity:hit_squares[0]}]} source={require("../images/StateX.png")}></Image>
          <Image style={[styles.gameTile,{top:167,left:150, opacity:hit_squares[0]}]} source={require("../images/StateX.png")}></Image>
          <Image style={[styles.gameTile,{top:167,left:266, opacity:hit_squares[0]}]} source={require("../images/StateX.png")}></Image>
          <Image style={[styles.gameTile,{top:280,left:30, opacity:hit_squares[0]}]} source={require("../images/StateX.png")}></Image>
          <Image style={[styles.gameTile,{top:280,left:150, opacity:hit_squares[0]}]} source={require("../images/StateX.png")}></Image>
          <Image style={[styles.gameTile,{top:280,left:266, opacity:hit_squares[0]}]} source={require("../images/StateX.png")}></Image>

          <View style={styles.gameSquare}>
            <Image style={{height:340,width:340,marginTop:5,marginLeft:5}} source={require("../images/play_board.png")}/>
          </View>
          </Pressable>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}
export default GameScreen;  