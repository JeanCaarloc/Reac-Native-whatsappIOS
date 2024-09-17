import {View, StyleSheet, Image, Text, Button, Linking, TouchableOpacity, ScrollView} from "react-native";
import { Contact } from "../types/Contact";
import { Ionicons, FontAwesome } from '@expo/vector-icons';

type Props ={
    product: Contact;
}


export const ChatsContact = (props : Props) =>{
    const chats = () =>{
        const url = ''
    Linking.openURL(url).catch(err =>{
        console.error("Failed to open URL:", err);
        alert("Não foi possivel abrir o link");
        });
    }

    return(
        <ScrollView style={styles.scroll}>
            <TouchableOpacity style={styles.container}>
                <Image
                    style={styles.image}
                    source={props.product.image}
                />
                <View style={styles.infoName}>

                    <Text style={styles.name}>{props.product.name}</Text>
                    <Text style={styles.info}><Ionicons name="checkmark-done-outline" size={16} color="blue" />{props.product.info}</Text>
                </View>
                <View style={styles.infoDate}>
                    <Text style={styles.date}> {props.product.date}</Text>
                    <Text>></Text>
                </View>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container:{
       width:'100%',
       height: 74,
       borderWidth:1,
       flexDirection:"row",
       alignItems:"center",
       justifyContent:"space-evenly",
       padding: null,

    },
    image:{
        width: 52,
        height: 52,
        
    },
    infoName:{
        width:'66%',
        flexDirection: "column",
        alignItems:"flex-start",
        borderWidth:1
    },
    name:{
        fontWeight:"bold",
        fontSize: 16
    },
    info:{
        color:'rgb(163, 163, 167)'
    },
    infoDate:{
        flexDirection: "column",
        alignItems:"flex-end"
    },
    scroll:{
    },
    date:{
        color:'rgb(163, 163, 167)'
    },
});