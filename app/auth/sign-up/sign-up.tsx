import React, {useState,} from 'react'
import { Button, View, ImageBackground, Text, TextInput } from 'react-native'
import firebase from '../../../environments/firebase'
require('firebase/auth')
export default function AddAssistence({history} : any) {
   let [email, setemail] = useState("")
   let [password, setpassword] = useState("")
  let registerUser = () => {
   console.log(email);
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {

      var user = userCredential.user;
      console.log(user)
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage)
     
      // ..
    });
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
          color: 'white'
        
      
        }}
      >
        <Text
          style={{
            color: 'white',
            fontSize: 20,
            marginTop: 16
          }}
        >
          Sign up
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
          placeholder='Email'
          value = {
            email
          }
          onChangeText = {
            setemail
          }
          style={{
            backgroundColor: 'white',
            width: '70%',
            padding: 5,
            marginTop: 19
          }}
        />
        <TextInput
        value = {
          password
        }
           onChangeText = {
             setpassword
           }
          placeholder='Password'
          
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
            onPress={ e  => history.push('/singup')}
            title='SIGN IN'
          />
        </View>
        <View style={{ marginTop: 9, width: '70%' }}>
          <Button
            color='#582900'
            onPress = {
              registerUser
            }
            title='SIGN UP'
          />
        </View>
      </View>
    </ImageBackground>
  )
}