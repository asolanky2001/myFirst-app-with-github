import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#d1d1d1',
        backgroundColor: '#fff',
        borderRadius: 10

    },
    rightContainer: {
        padding: 10,
        flex: 3,
    },
    image: {
        height: 150,
        flex: 2,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5
    },
    text: {
        fontSize: 18
    },
    oldPrice: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    price: {
        textDecorationLine: 'line-through',
        fontSize: 12,
        fontWeight: 'normal'
    },
    star: {
        margin: 2
    },
    main:{
        margin:10
    },
    icon: {
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default styles;