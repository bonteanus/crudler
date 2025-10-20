import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ModuleListScreen from "./src/components/screens/ModuleListScreen";
import ModuleAddScreen from "./src/components/screens/ModuleAddScreen";
import ModuleViewScreen from "./src/components/screens/ModuleViewScreen";
import ModuleModifyScreen from "./src/components/screens/ModuleModifyScreen";

const Stack = createNativeStackNavigator();

export const App = () => {
  // Initialisations ------------------
  // State ----------------------------
  // Handlers -------------------------
  // View -----------------------------
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="ModuleAddScreen"
        screenOptions={{
          headerStyle: { backgroundColor: "black" },
          headerTintColor: "white",
        }}>
        <Stack.Screen
          name="ModuleListScreen"
          component={ModuleListScreen}
          options={{ title: "List modules" }}
        />
        <Stack.Screen
          name="ModuleAddScreen"
          component={ModuleListScreen}
          options={{ title: "Add module" }}
        />

        <Stack.Screen
          name="ModuleViewScreen"
          component={ModuleListScreen}
          options={{ title: "View module" }}
        />

        <Stack.Screen
          name="ModuleModifyScreen"
          component={ModuleListScreen}
          options={{ title: "Modify module" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
