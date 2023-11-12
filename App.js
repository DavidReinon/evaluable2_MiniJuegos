import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Screen1 from "./src/screens/Screen1";
import Screen2 from "./src/screens/Screen2";

const Tab = createBottomTabNavigator();
const App = () => (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="screen1" component={Screen1} />
            <Tab.Screen name="screen2" component={Screen2} />
        </Tab.Navigator>
    </NavigationContainer>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
export default App;
