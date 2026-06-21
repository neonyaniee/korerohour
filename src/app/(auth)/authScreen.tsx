import { Link } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'

export default function authScreen() {
  return (
    <View>
      <Text>Welcome to AuthScreen</Text>
      <Link href="/(tabs)/articles">click</Link>
    </View>
  )
}

const styles = StyleSheet.create({})