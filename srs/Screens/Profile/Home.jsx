import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { View } from 'react-native';
// import { Text } from 'react-native';
import PostsScreen from './PostsScreen';
import CreatePostsScreen from './CreatePostsScreen';
import ProfileScreen from './ProfileScreen';
import { StyleSheet } from 'react-native';

// const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

// function PostsScreen() {
//   return (
//     // Ваша реалізація компонента PostsScreen
//     <View>
//       <Text>Posts Screen</Text>
//     </View>
//   );
// }

// function SettingsScreen() {
//   return (
//     // Ваша реалізація компонента SettingsScreen
//     <View>
//       <Text>Settings Screen</Text>
//     </View>
//   );
// }

// function ProfileScreen() {
//   return (
//     // Ваша реалізація компонента ProfileScreen
//     <View>
//       <Text>Profile Screen</Text>
//     </View>
//   );
// }

export default function Home() {
  const navigation = useNavigation();

  const handleLogout = () => {
    navigation.replace('Login');
  };

//   useFocusEffect(() => {
//     const parentNavigation = navigation.dangerouslyGetParent();
//     if (parentNavigation) {
//       parentNavigation.setOptions({
//         tabBarVisible: navigation.route.name !== 'CreatePost',
//       });
//     }
//   });

    const AddButton = ({ onPress, color, size }) => (
        <TouchableOpacity
            style={[styles.addButton, { backgroundColor: color }]}
            onPress={onPress}
        >
            <MaterialIcons name="add" size={size} color="#FFFFFF" />
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
        // tabStyle: {
        //     paddingHorizontal: 10, 
        //   },
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
      <Tabs.Screen name="CreatePost" component={CreatePostsScreen} />
      <Tabs.Screen name="Profile" component={ProfileScreen} />
    </Tabs.Navigator>
  );
}

const styles = StyleSheet.create({
    addButton: {
      width: 70,
      height: 40,
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

// import React from 'react';
// // import { View, Text } from 'react-native';
// import { createStackNavigator } from '@react-navigation/stack';
// import PostsScreen from './PostsScreen';
// import { TouchableOpacity } from 'react-native';
// import { MaterialIcons } from '@expo/vector-icons';
// import { useNavigation } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// // import CreatePostsScreen from './CreatePostsScreen';
// // import ProfileScreen from './ProfileScreen';
// // import CommentsScreen from './CommentsScreen';
// // import MapScreen from './MapScreen';

// const Stack = createStackNavigator();

// const Tabs = createBottomTabNavigator();

// export default function Home() {
//     const navigation = useNavigation();

//     const handleLogout = () => {
//         navigation.replace('Login');
//       };

//   return (
//     <Stack.Navigator>
//       <Stack.Screen 
//         name="Posts" 
//         component={PostsScreen} 
//         options={{ 
//             title: "Публікації",
//           headerTitleAlign: "center",
//           headerTitleStyle: {
//             color: "#212121",
//             textAlign: "center",
//             fontSize: 17,
//             lineHeight: 22,
//             letterSpacing: -0.408, 
//           },
//           headerLeft: null,
//           headerRight: () => (
//             <TouchableOpacity style={{ marginRight: 10 }} onPress={handleLogout}>
//               <MaterialIcons 
//                 name="logout" 
//                 size={24} 
//                 color="#BDBDBD" 
//               />
//             </TouchableOpacity>
//           ),
//           headerStyle: {
//             borderBottomWidth: 1,
//             borderBottomColor: "#E0E0E0", 
//           },
//         }} 
//       />
//       {/* <Stack.Screen name="CreatePost" component={CreatePostsScreen} />
//       <Stack.Screen name="Profile" component={ProfileScreen} />
//       <Stack.Screen name="Comments" component={CommentsScreen} />
//       <Stack.Screen name="Map" component={MapScreen} /> */}
//     </Stack.Navigator>
//   );
// };
