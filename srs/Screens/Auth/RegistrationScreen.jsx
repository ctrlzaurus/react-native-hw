import { useDispatch } from 'react-redux';

import React, { useState } from 'react';
import { Alert } from 'react-native';
import { View, TextInput, ImageBackground, Text, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import styles from '../../assets/styles/AuthScreenStyles';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import firebase from 'firebase/app';
import 'firebase/auth';

const PhotoBG = require('../../assets/images/PhotoBG.png');

export default RegistrationComponent = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  
  const navigation = useNavigation();

  const handleSubmit = () => {
    // console.log('Логін:', username);
    // console.log('Email:', email);
    // console.log('Пароль:', password);

    setUsername('');
    setEmail('');
    setPassword('');
  };

  const toggleShowPassword = () => {
    if (password !== '') {
      setShowPassword(!showPassword);
    }
  };

  const validateEmail = () => {
    const emailRegex = /\S+@\S+\.\S+/;
    const isValid = emailRegex.test(email);
    return isValid;
  };

  const handleSignUp = async () => {
    if (validateEmail()) {
      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        handleSubmit();
        navigation.navigate('Home', {
          screen: 'PostScreen',
        });
      } catch (error) {
        Alert.alert('Помилка при реєстрації:', error.message);
      }
    } else {
      Alert.alert('Будь ласка, введіть коректну електронну пошту');
    }
  };

  // const handleSignUp = () => {
  //   if (validateEmail()) {
  //     handleSubmit();
  //   } else {
  //     Alert.alert('Будь ласка, введіть коректну електронну пошту');
  //   }
  // };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.wrapper}>
        <ImageBackground source={PhotoBG} style={{flex:1, resizeMode:'cover'}}>

          <View style={styles.registrationWrapper}>

            <View style={styles.btnAddPhoto}>
              <TouchableOpacity style={styles.btnPhoto}>
                <AntDesign 
                  name="pluscircleo" 
                  size={25} 
                  color="#FF6C00" 
                />
                {/* <Text style={styles.singAddPhoto}>+</Text> */}
              </TouchableOpacity>
            </View>

            <Text style={styles.text}>Реєстрація</Text>

            <View style={styles.userWrapper}>
              <TextInput
                placeholder="Логін"
                onChangeText={text => setUsername(text)}
                value={username}
                style={[styles.input]}
              />
              <TextInput
                placeholder="Адреса електронної пошти"
                onChangeText={text => setEmail(text)}
                value={email}
                style={[styles.input]}
              />
              <View style={styles.passwordContainer}>
                <TextInput
                  placeholder="Пароль"
                  secureTextEntry={!showPassword}
                  onChangeText={text => setPassword(text)}
                  value={password}
                  style={[styles.input]}
                />
                <TouchableOpacity style={styles.showPassword} onPress={toggleShowPassword} disabled={password === ''}>
                  <Text style={styles.showPasswordText}>
                    {showPassword ? 'Приховати' : 'Показати'}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity 
              style={styles.singUpBtn} 
              onPress={() => {
                handleSignUp();
                navigation.navigate("Home", {
                  screen: "PostScreen",
                });
              }}
            >
              <Text
                style={styles.singUpText}
              >
                Зареєструватися
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.singInTitle} onPress={() => navigation.navigate("Login")}>
              <Text style={styles.singInText}>Вже є акаунт? Увійти</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};