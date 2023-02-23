import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const ImageDetail = ({title, img}) => {
  return (
    <View>
      <Image source={img} />
      <Text>{title}</Text>
    </View>
  )
}

export default ImageDetail

const styles = StyleSheet.create({})