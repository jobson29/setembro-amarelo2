import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}> 
    <Card style= {{backgroundColor: '#ffd700',width: 300}}>
   

      <Text style={styles.paragraph}>      
        Falar é a melhor solução. Não rejeite um pedido de ajuda!
      </Text>
      <Card style={{display: 'flex', alignItems: 'center',background: '#ffd700', width: 300}}>
       <Image style={{height:300, width:300}} source={require('./assets/conceito.png')}/>
       
      
      </Card>
        <Text style={styles.paragraph}>
      Às vezes, um coração em silêncio grita por ajuda. Ouça mais, seja gentil e não desista de ajudar.
      </Text>  
      
         
      </Card>
      
     
        
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#FFFF',
    padding: 30,
    display: "flex",
    alignItem: "center"
  },
  paragraph: {
    margin: 5,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});


