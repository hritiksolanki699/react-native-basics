import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <View style={styles.button}>
        <Button
          onPress={() => props.navigation.navigate("Components")}
          title="Navigate Component Screen"
        />
      </View>
      <View style={styles.button}>
        <Button
          onPress={() => props.navigation.navigate("List")}
          title="Navigate List Screen"
        />
      </View>
      <View style={styles.button}>
        <Button
          onPress={() => props.navigation.navigate("Image")}
          title="Navigate Image Screen"
        />
      </View>
      <View style={styles.button}>
        <Button
          onPress={() => props.navigation.navigate("Color")}
          title="Navigate Color Screen"
        />
      </View>
      <View style={styles.button}>
        <Button
          onPress={() => props.navigation.navigate("Square")}
          title="Navigate Square Screen"
        />
      </View>
      <View style={styles.button}>
        <Button
          onPress={() => props.navigation.navigate("Text")}
          title="Navigate Text Screen"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  button: {
    marginVertical: 10,
    padding: 20,
  },
});

export default HomeScreen;
