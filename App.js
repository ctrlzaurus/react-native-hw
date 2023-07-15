import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RegistrationComponent from './srs/Screens/Auth/RegistrationScreen';
import LoginScreen from './srs/Screens/Auth/LoginScreen';

export default function App() {
  return (
    // <View style={styles.container}>
      <RegistrationComponent />
      // <LoginScreen />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
