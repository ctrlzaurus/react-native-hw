import React, { useState } from 'react';
import { View, TextInput, ImageBackground, Text, TouchableOpacity } from 'react-native';
import styles from '../../assets/styles/AuthScreenStyles';
import { useNavigation } from '@react-navigation/native';

const PhotoBG = require('../../assets/images/PhotoBG.png');

export default LoginComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const navigation = useNavigation();

  const handleSubmit = () => {
    console.log('Email:', email);
    console.log('Пароль:', password);

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

  const handleSignUp = () => {
    if (validateEmail()) {
      handleSubmit();
    } else {
      Alert.alert('Будь ласка, введіть коректну електронну пошту');
    }
  };

  return (
    <View style={styles.wrapper}>
      <ImageBackground source={PhotoBG} style={{flex:1, resizeMode:'cover'}}>

        <View style={styles.registrationWrapper}>
          
          <Text style={styles.textLogin}>Увійти</Text>

          <View style={styles.userWrapper}>
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
                <TouchableOpacity style={styles.showPassword} onPress={toggleShowPassword}>
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
              Увійти
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.singInTitle} onPress={() => navigation.navigate("Registration")}>
            <Text style={styles.singInText}>Немає акаунту? Зареєструватися</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};