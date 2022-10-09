import { View, TouchableOpacity, SafeAreaView, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import style from "../styles/style";

const tela3 = () => {
  const Navigation = useNavigation();

  return (
    <View style={style.container}>
      <TouchableOpacity
        onPress={() => Navigation.goBack()}
        style={style.touchableOpacity}
      >
        <Text style={style.text}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default tela3;
