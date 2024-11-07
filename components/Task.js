import React, {useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Task = (props) => {

    const [isCompleted, setIsCompleted] = useState(false);

    const handleToggleComplete = () => {
        setIsCompleted(!isCompleted);
    };

    const handleDeletetask = () => {
        props.completeTask(props.index); // Call completeTask passed as a prop
    };

    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <TouchableOpacity style={styles.square} onPress={handleToggleComplete}>
                    {isCompleted && <Text style={styles.checkmark}>✔️</Text>}
                </TouchableOpacity>
                 <Text style={[styles.text, isCompleted && styles.completedText]}>
                     {props.text}
                 </Text>
            </View>

            <TouchableOpacity onPress={handleDeletetask}>
              <View style={styles.circular}></View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: "#FFF",
        padding: 15,
        borderRadius: 10,
        flexDirection: "row",
        alignItems:"center",
        justifyContent:"space-between",
        marginBottom: 20,
    },
    itemLeft: {
        flexDirection: "row",
        alignItems:"center",
        flexWrap:"wrap",
    },
    square: {
        width: 24,
        height:24,
        backgroundColor: "#55BCF6",
        opacity: 0.4,   
        borderRadius: 5,
        marginRight: 15,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        maxWidth: "80%",
    },
    completedText: {
        textDecorationLine: "line-through", 
        color: "#A9A9A9",
    },
    circular: {
        width: 12,
        height:12,
        borderColor: "#55BCF6",
        borderWidth: 2,
        borderRadius: 5,
    },
    checkmark: {
        color: "#FFF",
        fontSize: 15,
    },
});

export default Task;