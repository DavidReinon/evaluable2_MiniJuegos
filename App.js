import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Screen2 from "./src/screens/Screen2";
import Screen1 from "./src/screens/Screen1";

export default function App() {
    return (
        <View style={styles.container}>
            <Screen2></Screen2>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
