import { Platform, StyleSheet, View, Image, Text } from "react-native";
import Rectangle from "../../assets/images/Rectangle.png";

export default PostScreen = () => {
    return (
      <View style={styles.wrapper}>
        <View style={styles.userInfo}>
          <Image style={styles.image} source={Rectangle}></Image>
          <View>
            <Text style={styles.name}>Natali Romanova</Text>
            <Text style={styles.email}>email@example.com</Text>
          </View>
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
      height: "100%",
      backgroundColor: "#fff",
      padding: 16,
      paddingTop: 32,
    },
    name: {
      color: "#212121",
      fontSize: 13,
    },
    email: {
      color: "rgba(33, 33, 33, 0.80)",
      fontSize: 11,
    },
  
    image: {
      width: 60,
      height: 60,
      borderRadius: 16,
    },
    userInfo: {
      flexDirection: "row",
      alignItems: "center",
      gap: 8,
    },
  });