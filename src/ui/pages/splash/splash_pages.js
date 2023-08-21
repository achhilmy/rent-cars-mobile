import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Image } from "react-native";

export default SplashPage = ({ navigation }) => {
  useEffect(() => {
    // Simulate a delay for the splash screen (e.g., 2 seconds)
    const timer = setTimeout(() => {
      // Navigasi ke tampilan utama setelah selesai splash screen
      navigation.replace("Login"); // Ganti dengan nama layar utama Anda
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/bottom_image/traffic-jam.png")}
        style={styles.logo}
      />
      <View style={{ height: 20 }} />
      <Text style={styles.title}>Achmad Rent Cars</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  title: {
    fontSize: 21,
    fontWeight: "700",
    color: "black",
    maxWidth: 280,
    marginTop: 45,
  },
  logo: {
    width: 200,
    height: 200,
  },
});
