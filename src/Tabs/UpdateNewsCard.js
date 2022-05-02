import React from 'react';
import { View, Text, Card, Button, Colors } from 'react-native-ui-lib';

import styles from './UpdateNewsCard.styles';

const UpdateNewsCard = () => (
  <View style={[styles.cardContainer]}>
    <Card flex onPress={() => console.log('pressed')} style={[styles.card]}>
      <Card.Image
        style={[styles.cardImage]}
        source={{
          uri: 'https://images.unsplash.com/photo-1651413029252-aee5caeb2522?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80',
        }}
      />
      <View style={[styles.cardContentContainer]}>
        <Text style={[styles.title]}>
          ਮੁੱਖ ਮੰਤਰੀ ਦੇ ਸ਼ਹਿਰ ਸੰਗਰੂਰ ਦੇ ਸ਼ਹਿਰ ਸੰਗਰੂਰ ਦੇ ਰੇਹੜੀ ਚਾਲਕ ਨੂੰ ਆਇਆ 55460
          ਦਾ ਬਿਜਲੀ
        </Text>

        <View style={[styles.subtitle]}>
          <View style={[styles.subtitle]}>
            <Text style={[styles.published]}>Published</Text>
            <Text style={[styles.timestamp]}> | 1 May 2020</Text>
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
            />
          </View>
        </View>
      </View>
    </Card>
  </View>
);

export default UpdateNewsCard;
