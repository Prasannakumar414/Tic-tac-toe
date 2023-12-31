

import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  Dimensions,
  Image,
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


function App(): JSX.Element {
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
          source={require("./images/launchO.png")}/>
        <Image 
          style={styles.imageContainer2} 
          source={require("./images/launchX.png")}/>
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
          <Image
            style={styles.imageSquare}
            source={require("./images/imageX.png")}/>
          <Image
            style={styles.imageSquare}
            source={require("./images/imageO.png")}/>  
        </View>
      </View>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
});

export default App;
