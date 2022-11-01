import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Linking } from 'react-native';
import { TextInput, Button } from "react-native-paper";
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useLoginUserMutation } from "../../ReduxToolKit/Post";
import { Formik } from 'formik';
import {
    GoogleSignin,
    statusCodes,
} from '@react-native-google-signin/google-signin';

const LoginPage = ({ navigation }) => {

    const [loginUser, isLoading, isError] = useLoginUserMutation ();
    const [data, setData] = useState ( {
        email: '',
        password: ''
    } );

    const handleLoginSubmit = async (values) => {
        const errors = {};
        if (!values.email) {
            errors.email = 'Email Required';
            alert ( errors.email );
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test ( values.email )
        ) {
            errors.email = 'Invalid email address';
            alert ( errors.email );
        } else if (!values.password) {
            errors.password = 'Password Required';
            alert ( errors.password );
        } else {
            setData ( { email: values.email, password: values.password } );
            await loginUser ( data ) &&
            navigation.navigate ( 'Products' );
            values.email = '';
            values.password = '';
        }
    };

    return (
        <SafeAreaView>
            <View style={style.main}>
                <View style={style.mainDiv}>
                    <Text style={style.headerText}>
                        Login or Sign
                    </Text>
                </View>
                <View>
                    <Formik
                        initialValues={{ email: '', password: '' }}
                        onSubmit={values => handleLoginSubmit ( values )}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values }) => (
                            <View>
                                <TextInput
                                    onChangeText={handleChange ( 'email' )}
                                    label="Enter Email ID"
                                    onBlur={handleBlur ( 'email' )}
                                    value={values.email}
                                    style={style.input}
                                    type='flat'
                                />
                                <TextInput
                                    onChangeText={handleChange ( 'password' )}
                                    label="Enter Password"
                                    secureTextEntry={true}
                                    onBlur={handleBlur ( 'password' )}
                                    value={values.password}
                                    style={style.input}
                                    type='flat'
                                />
                                <Button onPress={handleSubmit} title="Submit" color={'#fff'} style={style.button}>Login Here</Button>
                            </View>
                        )}
                    </Formik>
                </View>
                <View style={style.socialDiv}>
                    <Text>
                        Or continue with social account
                    </Text>
                </View>
                <View style={style.socialIcon}>
                    <AntDesign name='facebook-square' size={26} onPress={() => { Linking.openURL('https://www.instagram.com') }}/>
                    <AntDesign name='google' size={26} onPress={() => { GoogleSignin.configure({
                        androidClientId: 'ADD_YOUR_ANDROID_CLIENT_ID_HERE',
                        iosClientId: '461409214109-8nibmjgdv87adb46kfloj6vq862ksr24.apps.googleusercontent.com',
                    });
                        GoogleSignin.hasPlayServices().then((hasPlayService) => {
                            if (hasPlayService) {
                                GoogleSignin.signIn().then((userInfo) => {
                                    navigation.navigate('Products')
                                }).catch((e) => {
                                    console.log("ERROR IS: " + JSON.stringify(e));
                                })
                            }
                        }).catch((e) => {
                            console.log("ERROR IS: " + JSON.stringify(e));
                        })
                    }}/>
                </View>
            </View>
        </SafeAreaView>

    )
};

const style = StyleSheet.create ( {
    input: {
        backgroundColor: '#fff',
        margin: 10
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    mainDiv: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    socialDiv: {
        marginTop: 70,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    socialIcon: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginLeft: 120,
        marginTop: 20,
        width: '30%',
    },
    main: {
        margin:20
    },
    button: {
        backgroundColor: '#000',
        color: '#fff'
    }

} );
export default LoginPage;