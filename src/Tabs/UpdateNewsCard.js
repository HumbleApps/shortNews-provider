import React from 'react';
import { View, Text, Card, Button, Colors } from 'react-native-ui-lib';
import useFirestore from '../NewsProvider/useStore';
import { getDate } from '../utils';

import styles from './UpdateNewsCard.styles';

const UpdateNewsCard = ({ ...props }) => {
  const {
    id,
    title,
    description,
    timestamp,
    imageUrl,
    author,
    source,
    articleUrl,
    onEditPress,
  } = props;

  const { deleteDataFromStore } = useFirestore();

  const handleEdit = () => {
    const newsItem = {
      id,
      title,
      description,
      timestamp,
      imageUrl,
      author,
      source,
      articleUrl,
    };
    onEditPress(newsItem);
  };

  const handleDelete = () => deleteDataFromStore(id);

  return (
    <View style={[styles.cardContainer]}>
      <Card flex style={[styles.card]}>
        <Card.Image
          style={[styles.cardImage]}
          source={{
            uri: imageUrl,
          }}
          resizeMode="stretch"
        />
        <View style={[styles.cardContentContainer]}>
          <Text style={[styles.title]}>{title}</Text>

          <View style={[styles.subtitle]}>
            <View style={[styles.subtitle]}>
              <Text style={[styles.published]}>Published</Text>
              <Text style={[styles.timestamp]}> | {getDate(timestamp)}</Text>
            </View>

            <View style={[styles.ctaButtonContainer]}>
              {onEditPress && (
                <Button
                  label={'Edit'}
                  outline
                  fullWidth
                  size={Button.sizes.xSmall}
                  backgroundColor={Colors.blue50}
                  style={[styles.delete]}
                  onPress={handleEdit}
                />
              )}
              <Button
                label={'Delete'}
                fullWidth
                size={Button.sizes.xSmall}
                backgroundColor={Colors.red30}
                style={[styles.delete]}
                onPress={handleDelete}
              />
            </View>
          </View>
        </View>
      </Card>
    </View>
  );
};

export default React.memo(UpdateNewsCard);
