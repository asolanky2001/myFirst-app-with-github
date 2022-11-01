import React from 'react';
import { SafeAreaView, View, StyleSheet } from "react-native";
import LoginPage from "./Components/Login";

const ProductScreen = () => {
    return(
        <SafeAreaView style={style.header}>
            <View style={style.root}>
                {/*<Header/>*/}
                <LoginPage/>
            </View>
        </SafeAreaView>
    )
};
const style = StyleSheet.create({
    root: {
         margin:20
    },
    header: {
        backgroundColor: 'orange'
    }
});
export default ProductScreen;















