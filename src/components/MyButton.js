import React from 'react';
import { TouchableOpacity , Text} from 'react-native';



export const MyButton = (props) =>{
    console.log("213",props.myColor);
    return(
        
    <TouchableOpacity style={[props.myStyle , {backgroundColor:props.myColor}]} onPress = {props.myOnPress} >
        <Text style={{textAlign:'center' , fontSize:15}}>
            {props.myTitle}
        </Text>
    </TouchableOpacity>
    )
}