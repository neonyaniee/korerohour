import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../../components/header'
import globalStyles from '../styles/global'

const Settings = () => {
  return (
  <SafeAreaView>
    <View>
      <Text style={globalStyles.title}> SETTINGS </Text>
      <Header/>
    </View>
  </SafeAreaView>
  )
}

export default Settings