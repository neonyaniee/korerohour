import AsyncStorage from "@react-native-async-storage/async-storage";
import { Redirect } from 'expo-router';
import { Button } from "expo-router/build/react-navigation";
import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import Header from '../../../components/header';
import globalStyles from '../styles/global';

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
    <View>
      <Text style={globalStyles.title}> KORERO HOUR </Text>
      <Header/>
      <Button onPress={reset}> RESET </Button>
    </View>
  )
}

export default Index