import React from 'react';
import { View, Text, Touchable, TouchableOpacity } from 'react-native';
import Backg from './back';
import { darkGreen } from './Cons'
import Field from './field';
import Btn from './btn';

const Registration = (props) => {
    return (
        <Backg>
            <View style={{ alignItems: "center", width: '100%' }}>
                <Text style={{ color: "black", fontSize: 64, fontWeight: 'bold', marginTop: 20 }}>Registration</Text>
                <Text style={{ color: "black", fontSize: 19, fontWeight: "bold", marginBottom: 20 }}>Create a new account</Text>
                <View style={{ backgroundColor: "white", height: 700, width: '100%', borderTopLeftRadius: 130, paddingTop: 50, alignItems: 'center' }}>

                    <Field placeholder="Name"/>
                    <Field placeholder="Email" keyboardType={'email-address'}/>
                    <Field placeholder="Contact number"
                    keyboardType={"number"} />
                    <Field placeholder="Password" secureTextEntry={true} />
                    <Field placeholder="Confirm-Password" secureTextEntry={true} />
                    <View style={{ display:"flex",flexDirection:"row", width: '78%', paddingRight: 16, marginBottom: 100 }}>
                        <Text style={{ color: "grey"}}>By signing in, you agree to our{" "}</Text>
                        <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: 16 }}>Term & Condition</Text>
                    </View>
                    <Btn textColor='white' bgColor={darkGreen} btnLabel="Registration" Press={() => {
                        alert("Account creacted")
                        // props.navigation.navigate('Login')
                    }} />
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "center" }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Already have an account ? </Text>
                        <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
                            <Text style={{ color: 'blue', fontWeight: 'bold', fontSize: 16 }}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Backg>
    );
}

export default Registration;