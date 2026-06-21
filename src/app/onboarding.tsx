import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import LottieView from "lottie-react-native";
import { Dimensions, View } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import { onboardingData } from "../../data/onboardingData";
import globalStyles from "./styles/global";


export default function onboarding() {
  
  const finishOnboarding = async () => {
    await AsyncStorage.setItem(
      "ONBOARDED",
      JSON.stringify(true)
    );
  };

  const{width}=Dimensions.get('window');

  const router=useRouter();

  const handleDone= async () => {
    await finishOnboarding();
    router.replace("/authScreen")
  }
  return (
    <View style={globalStyles.container}>
      <Onboarding 
        onDone={handleDone}
        onSkip={handleDone}
        pages={
          onboardingData.map((item)=>({
            backgroundColor:item.backgroundColor,
            title:item.title,
            subtitle:item.subtitle,
            image:(
              <View style={{width:width*0.7, height:width*0.7}}>
                  <LottieView source={item.lottie} autoPlay loop
                  style={{width:'100%', height:'100%'}}
                  />
              </View>
            )
          }))
        }
      />
    </View>
  );
}
