import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";

const TextScreen = () => {
  const [text, setText] = useState("");
  return (
    <View>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={text}
        onChangeText={(e) => setText(e)}
      />
      <Text style={{fontSize:24}}>Hi, {text}</Text>
    </View>
  );
};

export default TextScreen;

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
});
