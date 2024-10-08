import React, { useEffect, useState } from 'react';
import {
  Pressable,
  Text,
  Image,
  View,
  Modal,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './LaunchScreen';
import LinearGradient from 'react-native-linear-gradient';
import { RouteProp, useRoute } from '@react-navigation/native';
import { Props, RootStackParamList } from '../App';
let initialCellStates = new Array(9).fill({
  isHit:false, 
  state:require("/home/prasanna_apxor/Projects/Tic-tac-toe/images/StateX.png"),
  stateValue:100
})

type GameScreenRouteProp = RouteProp<RootStackParamList, 'GameScreen'>;

function GameScreen({ route }: { route: GameScreenRouteProp }) {
  useEffect(() => {
    console.log("hii this is useEffect")
    calculateWinner()
  });
  const [player,setPlayer] = useState(route.params.initialState == "X"?0:1);
  const [cells_state, set_cells_state] = useState(initialCellStates)
  const [modalVisibility,setModalVisible] = useState(false)
  const resetState = () => {
    set_cells_state(initialCellStates)
  }
  const updateCell = (num:number) => {
    console.log("hit squares are :" + cells_state)
    setPlayer(player == 0 ? 1 : 0)
    set_cells_state(cells_state.map((c,i) => {
      if (i == num) {
        return {
          isHit: true, 
          state: player == 0 ? require("/home/prasanna_apxor/Projects/Tic-tac-toe/images/StateX.png") : require("/home/prasanna_apxor/Projects/Tic-tac-toe/images/StateO.png"),
          stateValue: player==0 ? 1 : 0
        };
      }
      return c;
    }));
  }

  const calculateWinner = () => {
    console.log("calculating winner")
    const winnerLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    winnerLines.forEach(element => {
      console.log("values are : " + cells_state[element[0]].stateValue + "  " + cells_state[element[1]].stateValue + "  " + cells_state[element[2]].stateValue)
      let winValue = 0
      element.forEach(e => {
        winValue += cells_state[e].stateValue
      })
      if (winValue == 0) {
        setModalVisible(true)
      } else if (winValue == 3) {
        setModalVisible(true)
      }
    });
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
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisibility}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisible(false);
              resetState();
            }}>
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}> player {player == 0 ? "O" : "X"} has won !!</Text>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => {
                      setModalVisible(!modalVisibility);
                      resetState();
                      }}>
                      <Text style={styles.textStyle}>Game completed</Text>
                  </Pressable>
                </View>
              </View>
          </Modal>
          <Text style={styles.title}>{player == 0 ? "X's Turn" : "O's Turn"}</Text>
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