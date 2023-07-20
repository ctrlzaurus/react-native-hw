import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import Rectangle from "../../assets/images/Rectangle.png";
import styles from "../../assets/styles/PostScreenStyles";
import { EvilIcons } from "@expo/vector-icons";

export default PostScreen = ({ route }) => {
  const { post } = route.params || {};

  return (
    <View>
      <View style={styles.wrapper}>
        <View style={styles.userInfo}>
          <Image style={styles.image} source={Rectangle}></Image>
          <View>
            <Text style={styles.name}>Natali Romanova</Text>
            <Text style={styles.email}>email@example.com</Text>
          </View>
        </View>
      </View>
      <View style={styles.wrapperPost}>
        <View style={styles.postInfo}>
          <Image style={styles.imageWrapper} source={{ uri: post?.photo }} />
          <Text style={styles.namePost}>{post?.name}</Text>
          <View style={styles.bottomComponents}>
            <TouchableOpacity>
              <EvilIcons name="comment" size={18} color="#BDBDBD" />
            </TouchableOpacity>
            <Text style={styles.location}>{post?.location}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
