import { Ionicons } from '@react-native-vector-icons/ionicons/static'
import { useState } from 'react'
import { TextInput, TouchableOpacity, View } from 'react-native'
import { inputField } from '../types/InputField'
import globalStyles from '@/app/styles/global'

const InputField = ({icon, placeholder,value,onChangeText,secureTextEntry=false}:inputField) => {
  const[hidePassword,setHidePassword]=useState<boolean>(secureTextEntry)
  return (
    <View style={globalStyles.inputField}>
      {icon&&(
        <Ionicons
          name={icon}
          size={22}
          color="#ccc"
          style={{ marginRight: 6 }}
        />
      )}
      <TextInput 
        style={{flex: 1}}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry &&hidePassword}
    
      />
      {secureTextEntry&&(
        <TouchableOpacity 
        style={{ paddingRight: 10 }}
        onPress={()=>setHidePassword(prev=>!prev)}>
          <Ionicons
            name={hidePassword?"eye-off-outline":"eye-outline"}
            size={22}
            color="#ccc"
          />
        </TouchableOpacity>
      )}
    </View>
  )
}

export default InputField