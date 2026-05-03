import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>
        Exercise 9 - Group Project
      </Text>
      <Text>1. Joshua Ralph Tamparong</Text>
      <Text>2. Dhruv Jae Guboc</Text>
      <Text>3. Paulo Gabriel Limit</Text>
      <Text></Text>
      <Text></Text> 
      <Text style={{ fontSize: 16, fontWeight: "bold" }}>
        Instructions:
      </Text>
    </View>
  );
}