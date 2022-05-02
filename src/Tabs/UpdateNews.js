import React from 'react';
import { View } from 'react-native-ui-lib';

import styles from './UpdateNews.styles';
import UpdateNewsCard from './UpdateNewsCard';

const UpdateNews = () => {
  return (
    <View style={[styles.container]}>
      <UpdateNewsCard />
      <UpdateNewsCard />
      <UpdateNewsCard />
      <UpdateNewsCard />
      <UpdateNewsCard />
    </View>
  );
};

export default UpdateNews;
