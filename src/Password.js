import React, { useState, useEffect } from 'react';

import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Colors } from 'react-native-ui-lib';

const Login = ({ onChange }) => {
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (password) onChange(password);
  }, [password]);

  return (
    <View style={[styles.container]}>
      <Text style={[styles.banner]}>ShortNews Provider</Text>
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
  banner: {
    fontSize: 26,
    marginBottom: '30%',
    fontWeight: '700',
    width: '70%',
    borderColor: Colors.blue50,
    paddingHorizontal: 10,
    color: Colors.blue50,
  },
});

export default Login;
