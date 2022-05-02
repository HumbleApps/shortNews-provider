import React, { useState } from 'react';

import { View } from 'react-native';

import Login from './src/Password';
import TabProvider from './src/Tabs/TabProvider';

const App = () => {
  const [auth, setAuth] = useState(null);

  const handleLogin = password => {
    if (password === 'manjot@shortnews.com') setAuth(true);
  };

  return (
    <View>{!auth ? <Login onChange={handleLogin} /> : <TabProvider />}</View>
  );
};

export default App;
