import React from 'react';
import {View, Image, StyleSheet, SafeAreaView, Text } from 'react-native';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {Button} from "react-native-paper";
import {useGetProductsByIdQuery} from '../../ReduxToolKit/Post'

const ProductDetail = ({ route }) => {
    const routeData = route.params;

    const handleCart = () => {

    };

    const handleWishList = () => {

    };

    return (
        <View>
            <View style={style.main}>
                <View style={style.imageView}>
                    <Image style={style.image}
                           source={{ uri: routeData[0]?.images[0] }}/>
                </View>
                <View style={style.imageView}>
                    <Text style={style.description} numberOfLines={3}>{routeData[0]?.description}</Text>
                    <View style={style.ratingContainer}>
                        <FontAwesome style={style.star} name='star' size={18} color='#e47911'/>
                        <FontAwesome style={style.star} name='star' size={18} color='#e47911'/>
                        <FontAwesome style={style.star} name='star' size={18} color='#e47911'/>
                        <FontAwesome style={style.star} name='star-half-full' size={18} color='#e47911'/>
                        <FontAwesome style={style.star} name='star-o' size={18} color='#e47911'/>
                        <Text>  12,045</Text>
                    </View>
                    <View style={style.priceContainer}>
                        <Text style={style.oldPrice}>${routeData[0]?.price}</Text>
                        <Text style={style.newPrice}>${routeData[0]?.price - 50}</Text>
                    </View>
                </View>
            </View>
            <View style={style.buttonContainer}>
                <Button title="Submit" style={style.button} onPress={handleWishList}>Add to WishList</Button>
                <Button title="Submit" style={style.button} onPress={handleCart}>Add to Cart</Button>
            </View>
        </View>
    )
};

const style = StyleSheet.create ( {
    main: {
        backgroundColor: 'white',
        margin: 20
    },
    imageView: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    image: {
        height: 150,
        width: '70%',
        borderRadius: 5
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5
    },
    description: {
        fontSize: 20,
        margin: 10
    },
    priceContainer: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        paddingRight: 10
    },
    oldPrice: {
        marginRight: 10,
        marginTop: 5,
        textDecorationLine: 'line-through',
    },
    newPrice: {
        fontSize: 18,
      fontWeight: 'bold'
    },
    buttonContainer: {
        flexDirection: 'row',
        margin: 20,
    },
} );

export default ProductDetail;