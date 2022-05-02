import React, { useState } from 'react';

import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import { Colors, TabController } from 'react-native-ui-lib';

import Login from './src/Password';
import PostNews from './src/PostNews';

const App = () => {
  const [auth, setAuth] = useState(null);

  const handleLogin = password => {
    if (password === 'manjot@shortnews.com') setAuth(true);
  };

  return (
    <View>
      <View>
        <Text style={[styles.bannerText]}>Short News Provider</Text>
      </View>
      {/* {!auth ? <Login onChange={handleLogin} /> : <PostNews />} */}
      <TabController
        asCarousel
        items={[
          { label: 'Publish News' },
          { label: 'Update News' },
          { label: 'Third' },
        ]}>
        <TabController.TabBar />
        <TabController.PageCarousel
          style={{
            // backgroundColor: 'cyan',
            borderWidth: 2,
            height: '86%',
            // paddingBottom: '10%',
          }}>
          <TabController.TabPage index={0}>
            {/* {!auth ? <Login onChange={handleLogin} /> : <PostNews />} */}
            <PostNews />
          </TabController.TabPage>
          <TabController.TabPage index={1}>
            <Text>This is the page.. 2</Text>
          </TabController.TabPage>
          <TabController.TabPage index={2}>
            <Text>This is the page... 3</Text>
          </TabController.TabPage>
        </TabController.PageCarousel>
      </TabController>
    </View>
  );
};

const styles = StyleSheet.create({
  bannerText: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 24,
    paddingVertical: 14,
    color: Colors.blue50,
  },
});

export default App;
