import React from 'react';
import { View,Text, Touchable, TouchableOpacity } from 'react-native';
import Backg from './back';
import {darkGreen} from './Cons'
import Field from './field';
import Btn from './btn';

const Login=(props)=>{
    return(
     <Backg>
        <View style={{ width:'100%'}}>
        <Text style={{color:"black",fontSize:64,fontWeight:'bold',textAlign:'center'}}>Login</Text>
        <View style={{backgroundColor:"white", height:'100%',borderTopLeftRadius:130,paddingTop:100,alignItems:'center'}}>
            <Text style={{fontSize:40,color:darkGreen,fontWeight:"bold"}}>Welcome Again</Text>
            <Text style={{color:"grey",fontSize:19,fontWeight:"bold",marginBottom:20}}>Login in your account</Text>
          <Field placeholder="Email/Username " keyboardType={"email-address"}/>
          <Field placeholder="Password" secureTextEntry={true}/>
          <View style={{alignItems:'flex-end',width:'100%',paddingRight:16,marginBottom:130}}>
            {/* <Text style={{color:darkGreen,fontWeight:'bold',fontSize:16}}>Forgot Password ?</Text> */}
            <TouchableOpacity onPress={()=>props.navigation.navigate("Forget")}>
                <Text style={{color:'grey',fontWeight:'bold',fontSize:16}}>Forget Password</Text>
            </TouchableOpacity>
          </View>
          <Btn textColor='white' bgColor={darkGreen} btnLabel="Login" Press={()=>alert("Logged In")}/>
          <View style={{display:'flex',flexDirection:'row',justifyContent:"center"}}>
            <Text style={{fontSize:16,fontWeight:'bold'}}>Don't have an account ? </Text>
            <TouchableOpacity onPress={()=>props.navigation.navigate("Registration")}>
                <Text style={{color:'blue',fontWeight:'bold',fontSize:16}}>Registration</Text>
            </TouchableOpacity>
          </View>
        </View>
        </View>
     </Backg>
    );
}

export default Login;