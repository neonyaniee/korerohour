import { Text, View } from 'react-native'
import Header from '../../../components/header'
import globalStyles from '../styles/global'
import { SafeAreaView } from 'react-native-safe-area-context'

const Notifications = () => {
  return (
  <SafeAreaView>
    <View>
      <Text style={globalStyles.title}> NOTIFICATIONS </Text>
            <Header/>
    </View>
  </SafeAreaView>
  )
}

export default Notifications