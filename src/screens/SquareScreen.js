import { StyleSheet, Text, View } from "react-native";
import React, { useReducer, useState } from "react";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
  switch (action.type) {
    case "red":
      if (
        state.red + action.playload > 255 ||
        state.red + action.playload < 0
      ) {
        return state;
      }
      return { ...state, red: state.red + action.playload };
    case "green":
      if (
        state.green + action.playload > 255 ||
        state.green + action.playload < 0
      ) {
        return state;
      }
      return { ...state, green: state.green + action.playload };
    case "blue":
      if (
        state.blue + action.playload > 255 ||
        state.blue + action.playload < 0
      ) {
        return state;
      }
      return { ...state, blue: state.blue + action.playload };
    default:
      return state;
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;
  console.log(state, "state");

  return (
    <View>
      <ColorCounter
        color="Red"
        onIncrease={() => dispatch({ type: "red", playload: COLOR_INCREMENT })}
        onDecrease={() =>
          dispatch({ type: "red", playload: -1 * COLOR_INCREMENT })
        }
      />
      <ColorCounter
        color="Green"
        onIncrease={() =>
          dispatch({ type: "green", playload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "green", playload: -1 * COLOR_INCREMENT })
        }
      />
      <ColorCounter
        color="Blue"
        onIncrease={() => dispatch({ type: "blue", playload: COLOR_INCREMENT })}
        onDecrease={() =>
          dispatch({ type: "blue", playload: -1 * COLOR_INCREMENT })
        }
      />
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      />
    </View>
  );
};

export default SquareScreen;

const styles = StyleSheet.create({});
