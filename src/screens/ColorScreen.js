import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import React, { useState } from "react";

const ColorScreen = () => {
  const [color, setColor] = useState([]);
  return (
    <View>
      <View style={styles.button}>
        <Button
          onPress={() => {
            setColor([...color, randomRgb()]);
          }}
          title="Add a Color"
        />
        <FlatList
          data={color}
          renderItem={({ item }) => (
            <View
              style={{
                height: 100,
                width: 100,
                backgroundColor: item,
                marginVertical: 20,
              }}
            />
          )}
          keyExtractor={(item)=>item}
        />
        {/* <View
          style={{
            height: 100,
            width: 100,
            backgroundColor: randomRgb(),
            marginVertical: 20,
          }}
        /> */}
      </View>
    </View>
  );
};

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};

export default ColorScreen;

const styles = StyleSheet.create({
  button: {
    marginVertical: 10,
    padding: 20,
  },
});
