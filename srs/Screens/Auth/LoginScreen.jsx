import React, { useState } from 'react';
import { View, TextInput, ImageBackground, Text, TouchableOpacity } from 'react-native';
import styles from '../../assets/styles/AuthScreenStyles';

const PhotoBG = require('../../assets/images/PhotoBG.png');

export default LoginComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = () => {
    console.log('Логін:', username);
    console.log('Email:', email);
    console.log('Пароль:', password);

    setUsername('');
    setEmail('');
    setPassword('');
  };

  const toggleShowPassword = () => {
    if (password !== '') {
      setShowPassword(!showPassword);
    }
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
          
          <Text style={styles.text}>Увійти</Text>

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
          <TouchableOpacity style={styles.singUpBtn} onPress={handleSignUp}>
            <Text
              style={styles.singUpText}
            >
              Зареєструватися
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.singInTitle}>
            <Text style={styles.singInText}>Немає акаунту? Зареєструватися</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};