import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import tela1 from "./screens/tela1";
import tela2 from "./screens/tela2";
import tela3 from "./screens/tela3";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="tela1">
        <Stack.Screen name="tela1" component={tela1} />
        <Stack.Screen name="tela2" component={tela2} />
        <Stack.Screen name="tela3" component={tela3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
