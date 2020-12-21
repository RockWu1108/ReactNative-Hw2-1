import { StatusBar } from 'expo-status-bar';
import React , {useState} from 'react';
import { StyleSheet, Text, View , TouchableOpacity , TextInput ,Alert} from 'react-native';
import {MyButton} from './src/components/MyButton';
import textInputStyle from './src/styles/textInputStyle';
import buttonStyle from './src/styles/buttonStyle';
export default function App() {

  const[text , setText] = useState('');
  const[color , setColor] = useState('');
  const[state , setState] = useState(0);

  const setting = () =>{
    console.log(text , color);
    console.log(buttonStyle.touchableOpacity);
    if( text!=='' && color !==''){
        setState(1)
    }
    else{
        alterMessage('Error Message' , '還有欄位上為填寫完成！');
        setState(0)
    }
  }

  function alterMessage(title , message){
    Alert.alert(
      title,
      message,
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => console.log('OK Pressed')
        },
      ],
      {cancelable: false},
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TextInput style = {textInputStyle.inputText} placeholder="輸入按鈕文字" onChangeText = {text===''?setText('輸入按鈕文字'):(text)=>{ setText(text)}}></TextInput>
      <TextInput style = {textInputStyle.inputText} placeholder="輸入按鈕顏色" onChangeText = {(color)=>{ setColor(color)}}></TextInput>
      
      <MyButton myStyle = {buttonStyle.touchableOpacity} myColor='#0080FF' myTitle = {'確定'}   myOnPress={ () => {setting()}}/>
      {
         state === 1 ? <MyButton myStyle = {[buttonStyle.touchableOpacity]} myColor={color} myOnPress={ () => {alterMessage("Success", color)}}
                        myTitle={text}/> : <Text></Text>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
