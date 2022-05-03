import React, { useState } from 'react';

import { View } from 'react-native';
import NewsProvider from './src/NewsProvider/Provider';

import Login from './src/Password';
import TabProvider from './src/Tabs/TabProvider';

const App = () => {
  const [auth, setAuth] = useState(null);

  const handleLogin = password => {
    if (password === 'manjot@shortnews.com') setAuth(true);
  };

  return (
    <NewsProvider>
      <View>{!auth ? <Login onChange={handleLogin} /> : <TabProvider />}</View>
    </NewsProvider>
  );
};

export default App;
