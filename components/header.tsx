import { Text, View } from "react-native";
import globalStyles from "../src/app/styles/global";

export default function Header() {
    const currentDate = new Date().toLocaleDateString
    ('en-NZ', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
    });
    return (
    <View style={globalStyles.header}>
        <Text style={globalStyles.date}>{currentDate}</Text>
    </View>
    );
}
