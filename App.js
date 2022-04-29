import React, { useState } from 'react';

import { SafeAreaView, View, Text, StyleSheet } from 'react-native';

import Login from './src/Password';
import PostNews from './src/PostNews';

const App = () => {
  const [auth, setAuth] = useState(null);

  const handleLogin = password => {
    if (password === 'manjot@shortnews.com') setAuth(true);
  };

  return (
    <SafeAreaView>
      <View>
        <Text style={[styles.bannerText]}>Short News Provider</Text>
      </View>
      {!auth ? <Login onChange={handleLogin} /> : <PostNews />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bannerText: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 24,
    paddingTop: 30,
  },
});

export default App;
