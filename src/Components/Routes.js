import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from "./Login";
import ProductItem from "./ProductItem";
import ProductDetail from "./ProductDetail";
import Header from "./Header";

const MainStackNavigator = () => {

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login'>
                <Stack.Screen name="Products" component={ProductItem} />
                <Stack.Screen name="Login" component={LoginPage} />
                <Stack.Screen name="ProductDetails" component={ProductDetail} />
                <Stack.Screen name="HeaderBar" component={Header} />
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default MainStackNavigator;