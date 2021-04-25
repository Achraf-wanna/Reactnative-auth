import React, { useState } from "react";
  import { View, ImageBackground, Text, TextInput, Button } from 'react-native'
  import firebase from '../../../environments/firebase';
  export default function logAssistence( {history} : any) {
       let [email, setemail] = useState("")
       let [password, setpassword] = useState("")
   
       let loginUser = () => {
        
       firebase.auth().signInWithEmailAndPassword(email, password)

         .then((userCredential) => {
           // Signed in
           var user = userCredential.user;
          history.push("/Splash")
         })
         .catch((error) => {
           var errorCode = error.code;
           //console.log(errorCode);
           var errorMessage = error.message;
          // console.log(errorMessage);
         });
           var user = firebase.auth().currentUser;
            // Initializeconsole.log(user)
        }
        
    return (
  
   
  
      <ImageBackground
        source={{
          uri:
            'https://image.freepik.com/vecteurs-libre/element-ramadan-kareem-realiste_52683-59762.jpg'
        }}
        style={{ flex: 1 }}
      >
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'black',
            height: '8%',
            width: '100%',
            color: 'white',
          
          }}
        >
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              marginTop: 16
            }}
          >
            Sign in
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%'
          }}
        >
          <TextInput
             placeholder = 'Email'
                       value = {
                         email
                       }
                       onChangeText = {
                         setemail
                       }
            placeholder='Email'
            style={{ backgroundColor: 'white', width: '70%', padding: 5 }}
          />
          <TextInput
            placeholder='Password'
                 placeholder = 'Password'
                 value = {
                   password
                 }
                 onChangeText = {
                   setpassword
                 }
            style={{
              backgroundColor: 'white',
              width: '70%',
              padding: 5,
              marginTop: 19
            }}
          />
          <View style={{ marginTop: 30, width: '70%' }}>
            <Button
              color='#582900'
              onPress = {
                  loginUser  
              }

              title='SIGN IN'
            />
          </View>
          <View style={{ marginTop: 9, width: '70%' }}>
            <Button
              color='#582900'
              onPress= { e  => history.push("/") }
              title='SIGN UP'
            />
          </View>
        </View>
      </ImageBackground>
    )
  }