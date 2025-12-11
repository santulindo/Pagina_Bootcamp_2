import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "../components/CustomDrawer";
import HomeStack from "./HomeStackNavigator";
import CartStack from "./CartStackNavigator";
import ProfileStack from "./ProfileStackNavigator";


const Drawer = createDrawerNavigator();


export default function AppNavigator() {
return (
<NavigationContainer>
<Drawer.Navigator
drawerContent={(props) => <CustomDrawer {...props} />}
screenOptions={{ headerShown: false }}
>
<Drawer.Screen name="HomeStack" component={HomeStack} options={{ title: "Home" }} />
<Drawer.Screen name="CartStack" component={CartStack} options={{ title: "Cart" }} />
<Drawer.Screen name="ProfileStack" component={ProfileStack} options={{ title: "Profile" }} />
</Drawer.Navigator>
</NavigationContainer>
);
}