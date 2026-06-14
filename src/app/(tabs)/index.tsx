import { Text, View } from "react-native";
import Header from "../components/header";
import globalStyles from "../styles/global";

export default function Index() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}> KORERO HOUR </Text>
      <Header/>
    </View>
  );
}
