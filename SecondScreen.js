import React, { useEffect } from "react";
import {StyleSheet, View, Text} from "react-native";

export default function SecondScreen({route,navigation}) {
    useEffect(() => {
      if (route.params?.message) {
        alert(route.params.message);
      }  
    }, [])
    return (
        <View style={styles.container}>
            <Text>Second Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    }
})