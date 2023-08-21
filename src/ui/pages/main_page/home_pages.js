import React, { useState, useEffecy } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";

export const items = [
  {
    id: "1",
    image: require("../../../assets/bottom_image/notification.png"),
    title: "Item 1",
    description: "Description for Item 1",
  },
  {
    id: "2",
    image: require("../../../assets/bottom_image/notification.png"),
    title: "Item 2",
    description: "Description for Item 2",
  },
  // Add more items as needed
];
export default HomePages = () => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => navigation.navigate("ItemDetail", { item })}
    >
      <Image source={item.image} style={styles.itemImage} />
      <Text style={styles.itemTitle}>{item.title}</Text>
    </TouchableOpacity>
  );
  return (
    <>
      <View style={styles.container}>
        <View style={styles.headerRow}>
          <Text style={styles.title}>Hello, Selamat Datang Kembali</Text>
          <Image
            style={{ height: 25, width: 25, marginTop: 40, marginRight: 16 }}
            source={require("../../../assets/bottom_image/notification.png")}
          />
        </View>
        <FlatList
          data={items}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={2} // Set the number of columns in the grid
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    flex: 1,
    marginTop: 20,
    paddingLeft: 16,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  content1: {
    backgroundColor: "#01008C",
    height: "10%",
  },
  content2: {
    backgroundColor: "#ffffff",
    height: "100%",
    position: "relative",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    flexDirection: "column",
  },
  title: {
    fontSize: 21,
    fontWeight: "700",
    color: "black",
    maxWidth: 280,
    marginTop: 45,
  },
  itemContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    backgroundColor: "white",
  },
  itemImage: {
    width: 100,
    height: 100,
    resizeMode: "cover",
    marginBottom: 10,
  },
  itemTitle: {
    fontSize: 16,
    textAlign: "center",
  },
});
