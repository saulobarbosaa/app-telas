import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, TouchableOpacity, SafeAreaView, Text } from "react-native";
import style from "../styles/style";

export default function tela1({ navigation }) {
  const Navigation = useNavigation();

  return (
    <View style={style.container}>
      <TouchableOpacity
        onPress={() => Navigation.navigate("tela2")}
        style={style.touchableOpacity}
      >
        <Text style={style.text}>Avançar</Text>
      </TouchableOpacity>
    </View>
  );
}
