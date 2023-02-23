import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ImageDetail from '../components/ImageDetail'
import Beach from '../../assets/beach.jpg'
import Mountain from '../../assets/mountain.jpg'
import Forest from '../../assets/forest.jpg'

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail title="Forest" img={Forest} />
      <ImageDetail title="Mountain" img={Mountain} />
      <ImageDetail title="Beach" img={Beach} />
    </View>
  );
};

export default ImageScreen;

const styles = StyleSheet.create({});
