import React from 'react';
import { TouchableOpacity } from 'react-native';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PostsScreen from './PostsScreen';
import CreatePostsScreen from './CreatePostsScreen';
import ProfileScreen from './ProfileScreen';
import styles from '../../assets/styles/HomeStyles';

const Tabs = createBottomTabNavigator();

export default function Home() {
  const navigation = useNavigation();

  const handleLogout = () => {
    navigation.replace('Login');
  };

  const handleGoBack = () => {
    navigation.navigate('Posts');
  };

  const AddButton = ({ onPress, color, size }) => (
      <TouchableOpacity
          style={[styles.addButton, { backgroundColor: color }]}
          onPress={onPress}
      >
          <MaterialIcons name="add" size={size} color="#FFFFFF" />
      </TouchableOpacity>
  );

  const LeftArrowButton = ({ onPress }) => (
    <TouchableOpacity
      style={{ marginRight: 10, paddingLeft: 20 }}
      onPress={onPress}
    >
      <AntDesign name="arrowleft" size={24} color="black" />
    </TouchableOpacity>
  );

  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Posts') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'CreatePost') {
            return (
                <AddButton
                  onPress={() => navigation.navigate('CreatePost')}
                  color="#FF6C00"
                  size={size}
                />
              );
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person';
          }

          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
        tabBarLabel: () => null,
      })}
      tabBarOptions={{
        showLabel: false,
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tabs.Screen 
        name="Posts" 
        component={PostsScreen} 
        options={{ 
            title: "Публікації",
            headerTitleAlign: "center",
            headerTitleStyle: {
            color: "#212121",
            textAlign: "center",
            fontSize: 17,
            lineHeight: 22,
            letterSpacing: -0.408, 
            },
            headerLeft: null,
            headerRight: () => (
            <TouchableOpacity style={{ marginRight: 10 }} onPress={handleLogout}>
                <MaterialIcons 
                    name="logout" 
                    size={24} 
                    color="#BDBDBD" 
                />
            </TouchableOpacity>
            ),
            headerStyle: {
            borderBottomWidth: 1,
            borderBottomColor: "#E0E0E0", 
            },
        }} 
      />
      <Tabs.Screen 
        name="CreatePost" 
        component={CreatePostsScreen}
        options={{ 
          title: "Створити публікацію",
          headerTitleAlign: "center",
          headerTitleStyle: {
          color: "#212121",
          textAlign: "center",
          fontSize: 17,
          lineHeight: 22,
          letterSpacing: -0.408, 
          },
          headerStyle: {
            borderBottomWidth: 1,
            borderBottomColor: "#E0E0E0", 
          },
          tabBarVisible: false,
          tabBarStyle: { display: "none" },
          headerLeft: () => <LeftArrowButton onPress={handleGoBack} />,
        }} 
      />
      <Tabs.Screen 
        name="Profile" 
        component={ProfileScreen}
      />
    </Tabs.Navigator>
  );
}