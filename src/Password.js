import React, { useState, useEffect } from 'react';

import { View, Text, TextInput, StyleSheet } from 'react-native';

const Login = ({ onChange }) => {
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (password) onChange(password);
  }, [password]);

  return (
    <View style={[styles.container]}>
      <Text style={[styles.text]}>Please enter Your Password</Text>
      <TextInput
        placeholder={'Enter password'}
        autoFocus
        onChangeText={e => setPassword(e)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    alignItems: 'center',
    height: '80%',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
  },
});

export default Login;
