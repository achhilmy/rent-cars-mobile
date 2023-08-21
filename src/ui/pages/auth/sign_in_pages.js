import React, { useState, useEffecy } from "react";
import { Text, View, Button, StyleSheet, TextInput, Image } from "react-native";

export default SignInPage = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Implement your authentication logic here
    if (username === "" && password === "") {
      // Successful login
      console.log("Login successful");
      navigation.navigate("BottomTabs");
    } else {
      // Failed login
      console.log("Login failed");
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sign In Page</Text>
      <Image
        source={require("../../../assets/bottom_image/traffic-jam.png")}
        style={styles.logo}
      />
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#FFFFFF",
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 10,
  },
  logo: {
    width: 60,
    height: 60,
    marginBottom: 20,
  },
});
