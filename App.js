import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Header from "./Components/Header";
import TodoItem from "./Components/TodoItem";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "kiss piss", key: "1" },
    { text: "buy bread", key: "2" },
    { text: "learn react native", key: "3" },
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    })
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        {/** todo form */}
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
            <TodoItem item={item} pressHandler={pressHandler}/>
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 24,
  },
});
