import React, { useState, useEffecy } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default AccountPages = () => {
  const user = {
    avatar: require("../../../assets/bottom_image/notification.png"),
    name: "John Doe",
    bio: "Front-end Developer | React Enthusiast",
    location: "City, Country",
    website: "https://example.com",
  };
  return (
    <View style={styles.container}>
      <Image source={user.avatar} style={styles.avatar} />
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.bio}>{user.bio}</Text>
      <Text style={styles.location}>{user.location}</Text>
      <Text style={styles.website}>{user.website}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "white",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  bio: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 10,
  },
  location: {
    fontSize: 14,
    marginBottom: 5,
  },
  website: {
    fontSize: 14,
    color: "blue",
  },
});
