import React, { useEffect } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  Dimensions,
  Image,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { Props } from '../App';

function LaunchScreen({ route, navigation }: Props) {
  useEffect(() => {
    console.log("hii this is useEffect in launch screen")
  });
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
    return (
        <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <LinearGradient colors={["#00D2FF","#3A7BD5"]}>
        <View style={[styles.rootContainer]}>
          <Image 
            style={styles.imageContainer1} 
            source={require("../images/launchO.png")}/>
          <Image 
            style={styles.imageContainer2} 
            source={require("../images/launchX.png")}/>
          <Text 
            style={styles.title}  
            id="launchText">
              TIC-TAC-TOE
          </Text>
          <Text
            style={styles.question}
            id="launchQuestion">
            Pick who goes first?
          </Text>
          <View style={{flexDirection:"row",alignSelf:"center"}}>
              <Pressable onPress={() => navigation.navigate("GameScreen")}>
                <Image
                style={styles.imageSquare}
                source={require("../images/imageX.png")}/>
              </Pressable>
              <Pressable onPress={() => navigation.navigate("GameScreen")}>
                <Image
                style={styles.imageSquare}
                source={require("../images/imageO.png")}/> 
              </Pressable> 
          </View>
        </View>
        </LinearGradient>
      </SafeAreaView>
    );
  }

  export const styles = StyleSheet.create({
    rootContainer: {
      color:["#00D2FF","#3A7BD5"],
      flexDirection: "column",
      height:Dimensions.get("window").height,
    },
    imageContainer1:{
      position: 'absolute',
      top: 1,
      right:0,
    },
    imageContainer2:{
      position: 'absolute',
      top: 150,
      left: 0,
    },
    title: {
      textAlign:"center",
      fontSize: 42,
      fontWeight: 'bold',
      color:"white",
      shadowColor:"#40000000",
      shadowRadius:8,
      marginTop:215
    },
    question: {
      textAlign:"center",
      fontSize: 24,
      color:"white",
      fontFamily:"monospace",
      shadowColor:"#40000000",
      shadowRadius:8,
      marginTop:350
    },
    imageSquare:{
      height:143,
      width:143,
      borderRadius:20,
      margin:20
    },
    gameSquare:{
      borderRadius:20,
      height:351,
      width:351,
      borderWidth:1,
      alignSelf:"center",
      borderColor:"white",
      backgroundColor:"white",
      margin:50,
    },
    gameTile:{
      zIndex:100,
      height:117,
      width:117,
      position:"absolute",
    },
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      }
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: '#2196F3',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
  });

  export default LaunchScreen;