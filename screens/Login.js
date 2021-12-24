import React from 'react'
import { View, Text } from 'react-native'

import Button from '../components/button'
import Input from '../components/input'

export default function Login() {
    return (
        <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Text style={{ color: '#223e4b', fontSize: 20, marginBottom: 16 }}>
        Login
      </Text>
      <View style={{ paddingHorizontal: 32, marginBottom: 16, width: '100%' }}>
        <Input
          icon='user'
          placeholder='Enter your Username'
          autoCapitalize='none'
          autoCompleteType='username'
          keyboardType='user-name'
          keyboardAppearance='dark'
          returnKeyType='next'
          returnKeyLabel='next'
        />
      </View>
      <View style={{ paddingHorizontal: 32, marginBottom: 16, width: '100%' }}>
        <Input
          icon='key'
          placeholder='Enter your password'
          secureTextEntry
          autoCompleteType='password'
          autoCapitalize='none'
          keyboardAppearance='dark'
          returnKeyType='go'
          returnKeyLabel='go'
        />
      </View>
      <Button label='Login' onPress={() => true} />
    </View>
    )
}
