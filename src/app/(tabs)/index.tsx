import AsyncStorage from "@react-native-async-storage/async-storage";
import { Redirect } from 'expo-router';
import { Button } from "expo-router/build/react-navigation";
import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import Header from '../../../components/header';
import globalStyles from '../styles/global';
import { Link } from "expo-router";

const Index = () => {

  const reset = async () => { //reset
    await AsyncStorage.clear();
  };

  const [onboarded, setOnboarded] = useState<boolean | null>(null); // types

  useEffect(() => {
    const getStorage = async () => {
      const onboarded = await AsyncStorage.getItem("ONBOARDED");
      setOnboarded(onboarded ? JSON.parse(onboarded) : false);
  }
  getStorage();
  }, []);

  if (onboarded === null) { // loading
    return <Text>BAHHH</Text>
  }

  if (!onboarded) { // first time
    return <Redirect href="/onboarding" />
  }

    return ( //returning
  <SafeAreaView>
    <View>
      <Text style={globalStyles.title}> KORERO HOUR </Text>
      <Header/>
      <Button onPress={reset}> RESET CACHE </Button>
      <Link href="/(auth)/authScreen">Auth Screen</Link>
    </View>
  </SafeAreaView>
  )
}

export default Index