import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import sign_in_pages from "../ui/pages/auth/sign_in_pages";
import sign_up_pages from "../ui/pages/auth/sign_up_pages";
import account_page from "../ui/pages/main_page/account_page";
import home_pages from "../ui/pages/main_page/home_pages";
import splash_pages from "../ui/pages/splash/splash_pages";
// import { Ionicons } from "@expo/vector-icons"; // Anda dapat mengganti ini dengan ikon lain
import { Image } from "react-native";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Splash"
        component={splash_pages}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Login"
        component={sign_in_pages}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Register"
        component={sign_up_pages}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="BottomTabs"
        component={MyTabs}
      />
    </Stack.Navigator>
  );
};

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        headerMode="none"
        name="Home Screen"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ focused }) =>
            focused == true ? (
              <Image
                style={{ height: 25, width: 25 }}
                source={require("../assets/bottom_image/home-active.png")}
              />
            ) : (
              <Image
                style={{ height: 25, width: 25 }}
                source={require("../assets/bottom_image/home.png")}
              />
            ),
          tabBarActiveTintColor: "#01008C",
        }}
        component={home_pages}
      />
      <Tab.Screen
        name="Account Screen"
        options={{
          tabBarLabel: "Akun",
          tabBarIcon: ({ focused }) =>
            focused == true ? (
              <Image
                style={{ height: 25, width: 25 }}
                source={require("../assets/bottom_image/account-active.png")}
              />
            ) : (
              <Image
                style={{ height: 25, width: 25 }}
                source={require("../assets/bottom_image/account.png")}
              />
            ),
          tabBarActiveTintColor: "#01008C",
        }}
        component={account_page}
      />
    </Tab.Navigator>
  );
}
