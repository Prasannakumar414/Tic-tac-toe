import React, { useEffect, useState } from 'react';
import {
  Pressable,
  StyleSheet,
    Text,
    Image,
  View,
  GestureResponderEvent,
  ImageBackground,
  ImageBase,
  TouchableWithoutFeedbackBase,
  TouchableWithoutFeedbackComponent,
  ImageComponent,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './LaunchScreen';
import LinearGradient from 'react-native-linear-gradient';
import { opacity } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

let initialCellStates = new Array(9).fill({
  isHit:false, 
  state:require("/home/prasanna_apxor/Projects/Tic-tac-toe/images/StateX.png")
})

function GameScreen() {
  useEffect(() => {
    console.log("hii this is useEffect")
  });
  const gameSquareSide : number = 117;
  const [player,setPlayer] = useState(1);
  const [cells_state, set_cells_state] = useState(initialCellStates)
  const updateCell = (num:number) => {
    console.log("hit squares are :" + cells_state)
    setPlayer(player == 0 ? 1 : 0)
    set_cells_state(cells_state.map((c,i) => {
      if (i == num) {
        return {isHit:true, state: player == 0 ? require("/home/prasanna_apxor/Projects/Tic-tac-toe/images/StateX.png") : require("/home/prasanna_apxor/Projects/Tic-tac-toe/images/StateO.png")};
      }
      return c;
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
    return "/images/State"+ cells_state[num].state +".png"
  }
  return (
    <SafeAreaView>
      <LinearGradient colors={["#00D2FF","#3A7BD5"]}>
        <View style={styles.rootContainer}>
          <Text style={styles.title}>X's Turn</Text>
          { 
            cells_state.map((c,i) => (
              <Pressable onPress={() => {updateCell(i)}} key={i} style={[styles.gameTile,{top:340 + 117*(Math.floor(i/3)),left:40+117*(i%3), opacity:cells_state[i].isHit ? 1 : 0}]}>
                <Image source={cells_state[i].state}/>
              </Pressable>
            ))
          }
          <Pressable style={styles.gameSquare}>
            <Image style={{height:340,width:340,marginTop:5,marginLeft:5}} source={require("../images/play_board.png")}/>
          </Pressable>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}
export default GameScreen;  