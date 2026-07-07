import { useState } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import InputField from '../../../components/inputField'
import { StyleSheet } from 'react-native'
import globalStyles from '../styles/global'

const SignIn = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
  return (
    <View style={styles.boxes}>
      <InputField
      icon="mail"
      placeholder='Enter your email'
      value={email}
      onChangeText={setEmail}
      />
      <InputField
      icon="lock-closed"
      placeholder='Enter your password'
      value={password}
      onChangeText={setPassword}
      secureTextEntry
      />
      <TouchableOpacity onPress={()=>console.log("Forgot Password Pressed")}>
        <Text style={globalStyles.date}>Forgot Password?</Text>
      </TouchableOpacity>

      

    </View>
  )
}

const styles = StyleSheet.create({
  boxes:{
    paddingHorizontal: 4,
    gap: 4,

  }
})

export default SignIn
