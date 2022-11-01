import React, {useEffect, useState} from 'react';
import { View, Text, Image, ScrollView, AsyncStorage, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useGetAllProductsQuery, useLoginUserMutation, useGetProductsByIdQuery } from '../../ReduxToolKit/Post'
import styles from '../style'
import style from "../Header/style";
import AntDesign from "react-native-vector-icons/AntDesign";
import { TextInput } from "react-native-paper";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/AntDesign';

const ProductItem = ({ navigation }) => {

    const productData = useGetAllProductsQuery ();
    const AnimatedIcon = Animatable.createAnimatableComponent(Icon);
    const [loginUser, isLoading, isError] = useLoginUserMutation ();
    const data = {
        email: '',
        password: ''
    };
    const [wishlist,setWishlist] = useState([]);
    let smallAnimatedIcon = {};

    const handleProductDetail = async(e,id) => {
        const filterData = productData.currentData.products.filter((item) =>
            item.id === id
        );
       await AsyncStorage.setItem('ProductDetail',JSON.stringify(filterData));
        navigation.navigate ( 'ProductDetails',filterData );

    };

    const handleSearch = async (e) => {
        const newProductData = await AsyncStorage.getItem('Products').then((response) => {return response});
    };

    useEffect(() => {
        productData?.currentData?.products.map((item) =>  AsyncStorage.setItem('Products',JSON.stringify(item)));
    },[]);

  //  const handleSmallAnimatedIconRef = (ref) => {
  //      console.log(ref)
  //       smallAnimatedIcon = ref
  //   };
  //
  // const handleOnPressLike = () => {
  //       smallAnimatedIcon.bounceIn();
  //       setWishlist(!wishlist);
  //   };

    const handleLogout = () => {
        if (loginUser (data)) {
            console.log ( 'Logout Successful' );
            navigation.navigate ( 'Login' );
        }

        GoogleSignin.configure ( {
            androidClientId: 'ADD_YOUR_ANDROID_CLIENT_ID_HERE',
            iosClientId: '461409214109-8nibmjgdv87adb46kfloj6vq862ksr24.apps.googleusercontent.com',
        } );
        GoogleSignin.hasPlayServices ().then ( (hasPlayService) => {
            if (hasPlayService) {
                GoogleSignin.signOut ().then ( (userInfo) => {
                    navigation.navigate ( 'Login' )
                } )

                    .catch ( (e) => {
                        console.log ( "ERROR IS: " + JSON.stringify ( e ) );
                    } )
            }
        } )
            .catch ( (e) => {
                console.log ( "ERROR IS: " + JSON.stringify ( e ) );
            } )

    };

    return (
        <View style={styles.main}>
            <View style={style.headerText}>
                <View style={style.mainDiv}>
                    <FontAwesome name='navicon' size={20} color='#000'/>
                    <View>
                        <Text style={style.mainText}>HobbyMindZ</Text>
                    </View>
                    <AntDesign name='logout' size={20} color='#000' onPress={handleLogout}/>
                </View>
                <View>
                    <TextInput
                        label="Search"
                        type='flat'
                        style={style.input}
                        onChange={(e) => handleSearch(e)}
                        left={<TextInput.Icon name={() => <EvilIcons name={'search'} size={20}/>}/>}
                    />
                </View>
            </View>
            <ScrollView>
                <View>
                    {productData?.currentData?.products.map ( (item) => {
                        return (
                            <View style={styles.root} key={item.id}>
                                <Image style={styles.image}
                                       source={{ uri: item?.images[0] }} />
                                <View style={styles.rightContainer}>
                                    <Text style={styles.text} numberOfLines={3} onPress={(e) => handleProductDetail (e,item.id)}>{item?.description}</Text>
                                    <View style={styles.ratingContainer}>
                                        <FontAwesome style={styles.star} name='star' size={18} color='#e47911'/>
                                        <FontAwesome style={styles.star} name='star' size={18} color='#e47911'/>
                                        <FontAwesome style={styles.star} name='star' size={18} color='#e47911'/>
                                        <FontAwesome style={styles.star} name='star-half-full' size={18}
                                                     color='#e47911'/>
                                        <FontAwesome style={styles.star} name='star-o' size={18} color='#e47911'/>
                                        <Text>12,045</Text>
                                    </View>
                                    <Text style={styles.price}>fromsdasds ${item?.price}</Text>
                                    <Text style={styles.oldPrice}>${item?.price - 50}</Text>
                                    {/*<TouchableOpacity*/}
                                    {/*    activeOpacity={1}*/}
                                    {/*    onPress={handleOnPressLike}*/}
                                    {/*>*/}
                                    {/*    <AnimatedIcon*/}
                                    {/*        ref={handleSmallAnimatedIconRef}*/}
                                    {/*        name={wishlist ? 'heart' : 'hearto'}*/}
                                    {/*        color={wishlist ? '#e92f3c' : '#515151'}*/}
                                    {/*        size={18}*/}
                                    {/*        style={styles.icon}*/}
                                    {/*    />*/}
                                    {/*</TouchableOpacity>*/}
                                </View>
                            </View>
                        )
                    } )}
                </View>
            </ScrollView>
        </View>
    )
};

export default ProductItem;