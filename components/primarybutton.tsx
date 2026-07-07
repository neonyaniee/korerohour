import { StyleSheet, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import { primaryButtons } from '../types/PrimaryButton'
import globalStyles from '@/app/styles/global'

const PrimaryButton = ({title,onPress}:primaryButtons) => {
  return (
    <TouchableOpacity onPress={onPress}
    style={globalStyles.button}>
        <Text style={globalStyles.buttonText}>{title}</Text>
    </TouchableOpacity>
  )
}

export default PrimaryButton

const styles = StyleSheet.create({})