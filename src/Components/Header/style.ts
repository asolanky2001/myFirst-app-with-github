import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    headerText:{
        display:'flex',
    },
    mainDiv:{
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom:10,
    },
    mainText:{
        fontWeight: '500',
        fontSize:22
    },
    input:{
        margin:10,
        height:60,
        backgroundColor:'white',
    },
    sampleText:{
        fontSize: 40
    }

});

export default style;