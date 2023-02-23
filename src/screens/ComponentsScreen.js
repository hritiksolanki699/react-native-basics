import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ComponentsScreen = (props) => {
  return (
    <View>
      <Text style={styles.textStyle}>ComponentsScreen</Text>
      <Text style={styles.textStyle2}>ComponentsScreen</Text>
    </View>
  );
};

export default ComponentsScreen;

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 40,
  },
  textStyle2: {
    fontSize: 20,
  },
});
