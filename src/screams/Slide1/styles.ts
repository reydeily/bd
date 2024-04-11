import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7A8A96'
    },
    img: {
        width:337,
        height:327,
        marginTop: 40,

    },
    text:{
        fontSize: 21,
    },
    box: {
        marginTop:0,
         width: 250,
         height: 50,
         borderWidth:0.4,
        marginLeft: 10,
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: '#479DCC',
        
    },
    box2: {
        width: 250,
        height: 50,
        borderWidth:0.4,
       marginLeft: 10,
       justifyContent: 'center', 
       alignItems: 'center',
       backgroundColor: '#479DCC',
       
   },
   grand: {
        marginTop: 3,
        flexDirection:'column',
        justifyContent:'center',
        alignItems: 'stretch',
        height:300,
        flexWrap: 'nowrap'
   }
   

})