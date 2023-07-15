import React, { useState } from 'react';
import { View, TextInput, Alert, ImageBackground, StyleSheet, Text, TouchableOpacity } from 'react-native';
// import SvgUri from 'react-native-svg-uri';
// import Icon from '../../components/Icon';

const PhotoBG = require('../../assets/images/PhotoBG.png');

export default LoginComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = () => {

    if (username && password) {
      Alert.alert('Успіх!', 'Користувач зареєстрований.');
    } else {
      Alert.alert('Помилка!', 'Будь ласка, заповніть всі поля.');
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
              secureTextEntry
              onChangeText={text => setEmail(text)}
              value={email}
              style={[styles.input]}
            />
            <View style={styles.passwordContainer}>
                <TextInput
                placeholder="Пароль"
                secureTextEntry
                onChangeText={text => setPassword(text)}
                value={password}
                style={[styles.input]}
                />
                <TouchableOpacity style={styles.showPassword}>
                    <Text style={styles.showPasswordText}>Показати</Text>
                </TouchableOpacity>
            </View>
            {/* <Button style={styles.singUpBtn} title="Зареєструватися" onPress={handleRegistration} /> */}
          </View>
          <TouchableOpacity style={styles.singUpBtn}>
            <Text
              // onPress={handleRegistration}
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

const styles = StyleSheet.create({
  wrapper: {
    height: "100%",
  },
  registrationWrapper: {
    position: "relative",
    marginTop: "auto",
    marginLeft: "auto",
    marginRight: "auto",
    width: "100%",
    padding: 16,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  userWrapper: {
    width: "100%",
    gap: 16,
  },
  btnAddPhoto: {
    position: "absolute",
    top: -60,
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: '#F6F6F6',
  },
  btnPhoto: {
    position: "absolute",
    bottom: 10,
    right: -15,
    width: 30,
    borderWidth: 1,
    borderColor: '#FF6C00',
    borderStyle: "solid",
    borderRadius: 300,
  },
  singAddPhoto: {
    color: '#FF6C00',
    fontSize: 20,
    textAlign: 'center',
    paddingBottom: 1,
  },
  text: {
    fontSize: 30,
    fontWeight: 500,
    letterSpacing: 0.3,
    color: "#212121",
    marginTop: 92,
    marginBottom: 33,
  },
  input: {
    width: '100%',
    fontSize: 16,
    color: '#212121',
    backgroundColor: '#F6F6F6',
    borderColor: '#E8E8E8',
    height: 50,
    paddingLeft: 16,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderStyle: "solid",
    borderRadius: 4,
  },
  singUpBtn: {
    width: "100%",
    backgroundColor: "#FF6C00",
    padding: 16,
    borderRadius: 100,
    marginTop: 43,
    marginBottom: 16,
  },
  singUpText: {
    fontSize: 16,
    textAlign: "center",
    color: "#fff",
  },
  singInTitle: {

  },
  singInText: {
    fontSize: 16,
    fontWeight: 400,
    color: '#1B4371',
  },
  passwordContainer: {
    position: 'relative',
  },
  showPassword: {
    position: 'absolute',
    right: 16,
    top: 13,
  },
  showPasswordText: {
    fontSize: 16,
    color: '#1B4371',
  }
})