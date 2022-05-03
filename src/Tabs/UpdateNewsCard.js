import React from 'react';
import { View, Text, Card, Button, Colors } from 'react-native-ui-lib';
import useFirestore from '../NewsProvider/useStore';
import { getDate } from '../utils';

import styles from './UpdateNewsCard.styles';

const UpdateNewsCard = ({ id, title, timestamp, imageUrl }) => {
  const { deleteDataFromStore } = useFirestore();
  return (
    <View style={[styles.cardContainer]}>
      <Card flex style={[styles.card]}>
        <Card.Image
          style={[styles.cardImage]}
          source={{
            uri: imageUrl,
          }}
        />
        <View style={[styles.cardContentContainer]}>
          <Text style={[styles.title]}>{title}</Text>

          <View style={[styles.subtitle]}>
            <View style={[styles.subtitle]}>
              <Text style={[styles.published]}>Published</Text>
              <Text style={[styles.timestamp]}> | {getDate(timestamp)}</Text>
            </View>

            <View style={[styles.ctaButtonContainer]}>
              <Button
                label={'Edit'}
                outline
                fullWidth
                size={Button.sizes.xSmall}
                backgroundColor={Colors.blue50}
                style={[styles.delete]}
              />
              <Button
                label={'Delete'}
                fullWidth
                size={Button.sizes.xSmall}
                backgroundColor={Colors.red30}
                style={[styles.delete]}
                onPress={() => deleteDataFromStore(id)}
              />
            </View>
          </View>
        </View>
      </Card>
    </View>
  );
};

export default UpdateNewsCard;
