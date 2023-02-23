import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";

const ListScreen = () => {
  const friends = [
    { name: "Friend 1", age: "24" },
    { name: "Friend 2", age: "24" },
    { name: "Friend 3", age: "24" },
    { name: "Friend 4", age: "24" },
    { name: "Friend 5", age: "24" },
    { name: "Friend 6", age: "24" },
    { name: "Friend 7", age: "24" },
    { name: "Friend 8", age: "24" },
    { name: "Friend 9", age: "24" },
    { name: "Friend 10", age: "24" },
  ];

  return (
    <View>
      <FlatList
        data={friends}
        renderItem={({ item }) => (
          <Text style={styles.textStyle}>
            {item.name}- age {item.age}
          </Text>
        )}
        keyExtractor={(friend) => friend.name}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default ListScreen;

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});
