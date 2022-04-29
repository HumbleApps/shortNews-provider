import React, { useState } from 'react';

import { SafeAreaView } from 'react-native';

import { View, Incubator, Colors, Button } from 'react-native-ui-lib';

import styles from './PostNews.styles';

const { TextField } = Incubator;

Colors.loadColors({
  text: '#20303C',
  info: '#724cf9',
});

Colors.loadSchemes({
  light: {
    screenBG: 'transparent',
    textColor: Colors.grey10,
    moonOrSun: Colors.yellow30,
    mountainForeground: Colors.green30,
    mountainBackground: Colors.green50,
  },
  dark: {
    screenBG: Colors.grey10,
    textColor: Colors.white,
    moonOrSun: Colors.grey80,
    mountainForeground: Colors.violet10,
    mountainBackground: Colors.violet20,
  },
});

const PostNews = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [shortenBy, setShortenBy] = useState('');
  const [newsSource, setNewsSource] = useState('');
  const [articleUrl, setArticleUrl] = useState('');

  const isSubmitDisabled =
    title && description && imageUrl && shortenBy && newsSource && articleUrl;

  const handleSubmit = () => {
    const payload = {
      title,
      description,
      imageUrl,
      shortenBy,
      newsSource,
      articleUrl,
    };
  };

  return (
    <SafeAreaView>
      <View style={[styles.container]}>
        <TextField
          placeholder={'Title'}
          autoFocus
          multiline
          floatingPlaceholder
          floatingPlaceholderColor={Colors.info}
          floatingPlaceholderStyle={[styles.floatingPlaceholderStyle]}
          fieldStyle={[styles.fieldStyle]}
          onChangeText={e => setTitle(e)}
          style={[styles.fieldText]}
        />
        <TextField
          placeholder={'Description'}
          multiline
          spellCheck={false}
          floatingPlaceholder
          floatingPlaceholderColor={Colors.info}
          floatingPlaceholderStyle={[styles.floatingPlaceholderStyle]}
          fieldStyle={[styles.fieldStyle]}
          onChangeText={e => setDescription(e)}
          style={[styles.fieldText]}
        />
        <TextField
          placeholder={'Image URL'}
          multiline
          autoCapitalize={'none'}
          floatingPlaceholder
          floatingPlaceholderColor={Colors.info}
          floatingPlaceholderStyle={[styles.floatingPlaceholderStyle]}
          fieldStyle={[styles.fieldStyle]}
          onChangeText={e => setImageUrl(e)}
          style={[styles.fieldText]}
        />
        <TextField
          placeholder={'Shorten By'}
          multiline
          floatingPlaceholder
          floatingPlaceholderColor={Colors.info}
          floatingPlaceholderStyle={[styles.floatingPlaceholderStyle]}
          fieldStyle={[styles.fieldStyle]}
          onChangeText={e => setShortenBy(e)}
          style={[styles.fieldText]}
        />
        <TextField
          placeholder={'News Source'}
          multiline
          floatingPlaceholder
          floatingPlaceholderColor={Colors.info}
          floatingPlaceholderStyle={[styles.floatingPlaceholderStyle]}
          fieldStyle={[styles.fieldStyle]}
          onChangeText={e => setNewsSource(e)}
          style={[styles.fieldText]}
        />
        <TextField
          placeholder={'News Source Article URL'}
          multiline
          autoCapitalize={'none'}
          floatingPlaceholder
          floatingPlaceholderColor={Colors.info}
          floatingPlaceholderStyle={[styles.floatingPlaceholderStyle]}
          fieldStyle={[styles.fieldStyle]}
          onChangeText={e => setArticleUrl(e)}
          style={[styles.fieldText]}
        />

        <Button
          label={'Submit News'}
          size={Button.sizes.large}
          backgroundColor={Colors.blue50}
          style={[styles.submit]}
          disabled={!isSubmitDisabled}
          onPress={handleSubmit}
        />
      </View>
    </SafeAreaView>
  );
};

export default PostNews;
