import { Text, View } from 'react-native'
import Header from '../../../components/header'
import globalStyles from '../styles/global'

const Index = () => {
  return (
    <View>
      <Text style={globalStyles.title}> KORERO HOUR </Text>
      <Header/>
    </View>
  )
}

export default Index