import React, { useState } from 'react'
import { ScrollView } from 'react-native'

import { TextField, ErrorText } from '../components/Form'
import { Button } from '../components/Button'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = () => {
    setError('')
    alert('todo!')
  }

  return (
    <ScrollView contentContainerStyle={{ paddingVertical: 20 }} style={{ backgroundColor: '#fff' }}>
      <TextField
        label="Email"
        placeholder="john.doe@example.com"
        onChangeText={setEmail}
        value={email}
        autoCapitalize="none"
      />
      <TextField
        label="Password"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
        autoCapitalize="none"
      />
      <ErrorText text={error} />
      <Button text="Submit" onPress={handleSubmit} />
    </ScrollView>
  )
}

export default SignIn
