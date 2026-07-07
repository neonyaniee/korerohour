import { Text, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import Header from '../../../components/header';
import globalStyles from '../styles/global';

const Articles = () => {
  return (
  <SafeAreaView>
    <View>
      <Text style={globalStyles.title}> ARTICLES </Text>
      <Header/>
    </View>
  </SafeAreaView>
  )
}

export default Articles