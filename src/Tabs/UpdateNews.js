import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import useFirestore from '../NewsProvider/useStore';

import styles from './UpdateNews.styles';
import UpdateNewsCard from './UpdateNewsCard';

const UpdateNews = () => {
  const { newsData } = useFirestore();

  return (
    <SafeAreaView>
      <ScrollView
        style={[styles.container]}
        contentContainerStyle={{ paddingBottom: 20, paddingTop: 6 }}>
        {newsData &&
          newsData.map(news => (
            <UpdateNewsCard
              key={news?.id}
              title={news?.title}
              timestamp={news?.timestamp}
              imageUrl={news?.imageUrl}
              id={news?.id}
            />
          ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default UpdateNews;
