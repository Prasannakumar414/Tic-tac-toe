import React from 'react';
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


function GameScreen() {
  const gameSquareSide : number = 117;
  const handlePress = (event:GestureResponderEvent) => {
    // Get the touch location from the event
    const { locationX, locationY } = event.nativeEvent;
    console.log("the cell is "+ getCell(locationX,locationY,gameSquareSide))
    
  };
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
  return (
    <SafeAreaView>
      <LinearGradient colors={["#00D2FF","#3A7BD5"]}>
        <View style={styles.rootContainer}>
          <Text style={styles.title}>X's Turn</Text>
          <Pressable onPress={handlePress}>
          <View style={styles.gameSquare}>
            <Image style={{height:340,width:340,marginTop:5,marginLeft:5}} source={require("./images/play_board.png")}/>
          </View>
          </Pressable>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}
export default GameScreen;  