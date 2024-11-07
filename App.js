import React, {useState} from 'react'
import { Platform, StyleSheet, Text, View, TextInput, KeyboardAvoidingView, TouchableOpacity, ImageBackground, Keyboard } from 'react-native';
import Task from "./components/Task";

export default function App() {

  const [task, setTask] = useState("");
  const [taskItems, setTaskItems] = useState([]);

  const date = new Date().toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day:"numeric"
  })

  const handleAddTask = () => {
    setTaskItems([...taskItems, task]);
    setTask("");
    Keyboard.dismiss(); // This keyboard seems to be a little buggy
    }
  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  return (
    <ImageBackground
      source={require('./assets/todo-background.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>

        <View style={styles.taskWrapper}>
          <Text style={styles.sectionTitle}>Today's Task</Text>
          <Text style={styles.dateTitle}>{date}</Text>

        <View style={styles.items}>
            {
              taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                  <Task text={item} />
                </TouchableOpacity>
              )
              })
            }
        </View>
        </View>

        <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
        >
          <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)}/>

          <TouchableOpacity onPress={() => handleAddTask()} >
            <View style={styles.addWrapper}>
            <Text style={styles.addText}> + </Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  dateTitle: {
    fontSize: 15,
    fontWeight: "light",
    paddingTop: 2,
    paddingLeft:2,
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
input: {
  paddingVertical: 15,
  paddingHorizontal: 15,
  backgroundColor: "#FFF",
  borderRadius: 60,
  borderColor: "#C0C0C0",
  borderWidth: 1,
  width: 250,
},
addWrapper: {
  width: 60,
  height: 60,
  backgroundColor: "#FFF",
  borderRadius: 60,
  justifyContent: "center",
  alignItems: "center",
  borderColor: "#C0C0C0",
  borderWidth: 1,
},
background: {
  flex: 1,
  width: '100%',
  height: '100%',
},
addText: {},
});
