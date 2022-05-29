import React, { useState, useCallback } from 'react';
import { ScrollView, View } from 'react-native';
import BigList from 'react-native-big-list';

import useFirestore from '../NewsProvider/useStore';
import PostNews from '../PostNews/PostNews';

import styles from './UpdateNews.styles';
import UpdateNewsCard from './UpdateNewsCard';

const UpdateNews = () => {
  const ITEM_HEIGHT = 106;
  const { newsData } = useFirestore();

  const [editingNews, setEditingNews] = useState(null);

  const handleEdit = item => setEditingNews(item);

  const handleCancel = () => setEditingNews(null);

  const renderItem = ({ item }) => (
    <UpdateNewsCard
      key={item?.id}
      {...item}
      onEditPress={() => handleEdit(item)}
    />
  );
  const keyExtractor = useCallback(item => item.id?.toString(), []);

  const getItemLayout = useCallback(
    (data, index) => ({
      length: ITEM_HEIGHT,
      offset: ITEM_HEIGHT * index,
      index,
    }),
    [],
  );

  return (
    <View style={{ height: '100%' }}>
      {editingNews && (
        <ScrollView contentContainerStyle={{ paddingHorizontal: 10 }}>
          <UpdateNewsCard key={editingNews?.id} {...editingNews} />
          <PostNews {...editingNews} onCancel={handleCancel} />
        </ScrollView>
      )}
      <BigList
        data={newsData}
        renderItem={renderItem}
        style={[styles.container]}
        getItemLayout={getItemLayout}
        keyExtractor={keyExtractor}
        itemHeight={110}
        contentContainerStyle={[styles.bigList]}
      />
    </View>
  );
};

export default UpdateNews;
