import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({

    containerMain: {
        flex: 1,
        backgroundColor: "#CCD8B4",
    },

    //Titulo
    containerTitle: {
        flex: 0.6,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        position: "relative",
        zIndex: 1,


    },
    title: {
        fontSize: 30,
        color: "#234F19",
        fontWeight: "bold",

    },

    //Input
    containerText: {
        flex: 2.5,
        backgroundColor: "#FFF",
        justifyContent: "space-around",
        padding: 30,
        position: "absolute",
        zIndex: 3,
        borderColor: "#000", //cor da borda
        borderStyle:"dashed", //estilo da bordar
        borderWidth: 2, //espessura da bordar

    },
    text1: {
        fontSize: 20,
        color: "#234F19",
        fontWeight:"bold",
    },
    text2: {
        fontSize: 20,
        color: "#234F19",
        fontWeight:"bold",
    },
    text1Box: {
        backgroundColor:"#D9E8D0",
        borderRadius:10,
        borderColor:"#234F19",
        fontSize:20,
        padding: 5,

    },
    text2Box: {
        backgroundColor:"#D9E8D0",
        borderRadius:10,
        borderColor:"#234F19",
        fontSize:20,
        padding: 5,

    },
    divBox:{
        flexDirection:"row",
        justifyContent:"space-between",
        gap: 10,
        padding: 2,
    },

    //Botão
    containerButton: {
        flex: 0.5,
        justifyContent:"center",
        flexDirection:"row",
        gap: 10,
        alignItems: "center",
        textAlignVertical:"center",
        position:"relative",
        zIndex: 1,
    },
    buttonBox: {
        backgroundColor:"#234F19",
        borderRadius: 30,
        padding: 20,
        width: 170,
        position:"relative",
        zIndex: 2,
        
    },
    buttonText: {
        color:"#FFF",
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "center",
        
    },
    listBox: {
        flex: 2.2,
        padding: 18,
        position:"relative",
        zIndex: -4
        
    },
    keyBox:{
        flex:2.6,
        position: "relative",
        zIndex: 3,
    },
})