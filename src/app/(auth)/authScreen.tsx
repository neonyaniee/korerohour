import { Link } from 'expo-router';
import { Text, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import SignIn from './signIn';
import globalStyles from '../styles/global';
import PrimaryButton from '../../../components/primarybutton';

export default function authScreen() {
  return (
  <SafeAreaView style={{ flex: 1 }}>
    <View style={globalStyles.authContainer}>
      <Text style={globalStyles.authTitle} >Readers, welcome to Korero Hour!</Text>
      <SignIn/>
      <PrimaryButton
        title='Login'
        onPress={()=>console.log("Login Button Pressed")}
      />
    </View>
  </SafeAreaView>
  )
}