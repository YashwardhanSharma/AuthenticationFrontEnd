import React from "react";
import {View,StyleSheet,Text} from 'react-native';
import Backg from "./back";
import Btn from "./btn";
import { darkGreen } from "./Cons";
const Home=(props)=>{
    return(
        <Backg>
            <View style={{marginHorizontal:60,marginVertical:200}}>
            <Text style={{color:'black',fontSize:60}} >Easy-care</Text>
            <Btn bgColor={darkGreen} textColor='white' btnLabel="Login" Press={()=>props.navigation.navigate("Login")}/>
            <Btn bgColor={darkGreen} textColor='white' btnLabel="Registraion"  Press={()=>props.navigation.navigate("Registration")}/>
            </View>
        </Backg>
        
    );
}
const styles=StyleSheet.create({})
export default Home;