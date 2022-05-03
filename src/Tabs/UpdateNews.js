import React, { useRef, useState } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { ExpandableSection } from 'react-native-ui-lib';
import useFirestore from '../NewsProvider/useStore';
import PostNews from '../PostNews/PostNews';

import styles from './UpdateNews.styles';
import UpdateNewsCard from './UpdateNewsCard';

const UpdateNews = () => {
  const { newsData } = useFirestore();
  const ref = useRef(null);

  const [editActive, setEditActive] = useState(false);
  const [editingNews, setEditingNews] = useState(null);

  const handleEdit = item => {
    if (ref?.current) ref?.current.scrollTo({ x: 0, y: 0, animated: true });
    setEditActive(true);
    setEditingNews(item);
  };

  const handleCancel = () => {
    setEditActive(false);
    setEditingNews(null);
  };

  return (
    <SafeAreaView>
      <ScrollView
        ref={ref}
        style={[styles.container]}
        contentContainerStyle={{ paddingBottom: 20, paddingTop: 6 }}>
        <ExpandableSection
          expanded={editActive}
          sectionHeader={
            editingNews && (
              <UpdateNewsCard key={editingNews?.id} {...editingNews} />
            )
          }
          onPress={() => {
            setEditActive(false);
            setEditingNews(null);
          }}>
          <PostNews {...editingNews} onCancel={handleCancel} />
        </ExpandableSection>
        {newsData &&
          newsData.map(news => (
            <UpdateNewsCard key={news?.id} {...news} onEditPress={handleEdit} />
          ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default UpdateNews;
