import React, { useState } from 'react'
import { ScrollView, Text, TouchableOpacity, StyleSheet, View } from 'react-native'

import { TextField, ErrorText } from '../components/Form'
import { Button } from '../components/Button'
import { Counter } from '../components/Counter'

const styles = StyleSheet.create({
  textBlock: {
    marginTop: 20,
  },
  text: {
    fontSize: 18,
    color: '#969696',
    textAlign: 'center',
    marginBottom: 2,
  },
  link: {
    textDecorationLine: 'underline',
  },
})

const isValidInputs = state => {
  const fields = ['email', 'fName', 'lName', 'password', 'cPassword']
  const validArray = fields.map(field => {
    if (!state[field] || state[field].length === 0) {
      return false
    }
    return true
  })

  const validFields = validArray.filter(valid => valid)
  return validFields.length === fields.length
}

const CreateAccount = ({ navigation }) => {
  const [errorMessage, setErrorMessage] = useState(null)
  const [email, setEmail] = useState('')
  const [fName, setFName] = useState('')
  const [lName, setLName] = useState('')
  const [password, setPassword] = useState('')
  const [cPassword, setCPassword] = useState('')

  const onSubmit = () => {
    if (!isValidInputs(email && fName && lName && password && cPassword)) {
      setErrorMessage('An error occured.')
    } else {
      setErrorMessage(null)

      fetch('https://postman-echo.com/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          fName,
          lName,
          password,
        }),
      })
        .then(res => res.json())
        .then(res => {
          console.log('res', res)
        })
        .catch(err => {
          console.log('err', err)
        })
    }
  }

  return (
    <ScrollView contentContainerStyle={{ paddingVertical: 20 }} style={{ backgroundColor: '#fff' }}>
      <TextField
        label="Email"
        placeholder="john.doe@example.com"
        value={email}
        onChangeText={setEmail}
      />
      <TextField label="First Name" placeholder="John" value={fName} onChangeText={setFName} />
      <TextField label="Last Name" placeholder="Doe" value={lName} onChangeText={setLName} />
      <TextField label="Password" value={password} onChangeText={setPassword} />
      <TextField label="Confirm Password" value={cPassword} onChangeText={setCPassword} />
      <ErrorText text={errorMessage} />
      <Button text="Submit" onPress={onSubmit} />
      <View style={styles.textBlock}>
        <Text style={styles.text}>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <Text style={[styles.text, styles.link]}>Sign in.</Text>
        </TouchableOpacity>
      </View>
      <Counter />
    </ScrollView>
  )
}

export default CreateAccount
