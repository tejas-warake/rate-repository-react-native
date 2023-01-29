import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        margin: 10
    },
    logo: {
        width: 50,
        height: 50
    }
})

const DisplayImage = ({imgUrl}) => {
  return (
    <View style={StyleSheet.container}>
        <Image 
            style={styles.logo}
            source={{uri: imgUrl}}
        />
    </View>
  )
}

export default DisplayImage;