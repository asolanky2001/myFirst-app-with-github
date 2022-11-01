/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import
    React from 'react';
import type {Node} from 'react';
import { Provider } from "react-redux";
import { store } from "./src/store";
import MainStackNavigator from "./src/Components/Routes";

const App: () => Node = () => {

    return (
            <Provider store={store}>
                <MainStackNavigator/>
            </Provider>
    );
};

export default App;
