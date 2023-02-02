import React from "react";
import {View, ImageBackground} from 'react-native';
const Backg=({children})=>{
    return(
        <View>
            <ImageBackground source={require("./bgd.jpg")} 
            style={{height:'100%'}}/>
        <View style={{position:"absolute", width:'100%' ,height:'100%'}}>
            {children}
        </View>
        </View>
    );
}

export default Backg;