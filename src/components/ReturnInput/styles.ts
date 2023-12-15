import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({

    containerMain:{
        backgroundColor:"#789465",
        flex: 1,
        borderColor:"#000",
        borderRadius: 15,
        borderStyle:"solid", //estilo da bordar
        margin: 5, //expessura da borda
        padding: 20
    },
    divBox:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignContent:"center",

    },
    textTitle:{
        fontSize: 20,
        color:"#000",
        fontWeight:"bold",
        padding:5,
        justifyContent:"center",
        textAlign: "center",
       
    },
    input1:{
        fontSize: 15,
        color: "#000",
        backgroundColor: "#FFF",
        padding: 10,
        borderRadius: 10,
        marginLeft: 10,
        marginRight: 10,
        textAlign:"center",
    },
    Textinput:{
        fontSize: 15,
        color: "#000",
        backgroundColor: "#FFF",
        padding: 10,
        borderRadius: 10,
        marginLeft: 10,
        marginRight: 10,
        width: 100,
        textAlign:"center"
        
    },

})