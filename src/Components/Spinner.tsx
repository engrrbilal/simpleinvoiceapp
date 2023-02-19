import { DefaultVariables } from "@/Theme";
import React from "react";
import { View, ActivityIndicator } from "react-native";

export default function Spinner(props: any) {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30
      }}
    >
      <ActivityIndicator
        size={props.size || "large"}
        color={DefaultVariables.Colors.blue}
      />
    </View>
  );
}
