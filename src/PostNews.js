import React, { useState } from 'react';

import { SafeAreaView, Text } from 'react-native';

import {
  View,
  Incubator,
  Colors,
  Button,
  LoaderScreen,
} from 'react-native-ui-lib';

import firestore from '@react-native-firebase/firestore';

import styles from './PostNews.styles';

const { TextField } = Incubator;

Colors.loadColors({
  text: '#20303C',
  info: '#724cf9',
});

const PostNews = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [author, setAuthor] = useState('');
  const [newsSource, setNewsSource] = useState('');
  const [articleUrl, setArticleUrl] = useState('');

  const [showBanner, setShowBanner] = useState(false);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);

  const isSubmitDisabled =
    title && description && imageUrl && author && newsSource && articleUrl;

  const resetAll = () => {
    setTitle('');
    setDescription('');
    setImageUrl('');
    setAuthor('');
    setNewsSource('');
    setArticleUrl('');
  };

  const handleSubmit = () => {
    const payload = {
      title,
      description,
      imageUrl,
      author,
      source,
      articleUrl,
    };

    setLoader(true);

    firestore()
      .collection('news')
      .add(payload)
      .then(() => {
        console.log('News added!');
        resetAll();
        setShowBanner(true);
        setTimeout(() => setShowBanner(false), 500);
        setLoader(false);
      })
      .catch(() => {
        setShowBanner(true);
        setError(true);
        setTimeout(() => setShowBanner(false), 500);
        setTimeout(() => setError(false), 500);
        setLoader(false);
      });
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
          value={title}
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
          value={description}
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
          value={imageUrl}
          style={[styles.fieldText]}
        />
        <TextField
          placeholder={'Shorten By'}
          multiline
          floatingPlaceholder
          floatingPlaceholderColor={Colors.info}
          floatingPlaceholderStyle={[styles.floatingPlaceholderStyle]}
          fieldStyle={[styles.fieldStyle]}
          onChangeText={e => setAuthor(e)}
          value={author}
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
          value={newsSource}
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
          value={articleUrl}
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

        {loader && <LoaderScreen message="Submitting..." />}

        {showBanner &&
          (error ? (
            <View style={[styles.failedView]}>
              <Text style={[styles.failedMsg]}>
                Please try again or check your internet!
              </Text>
            </View>
          ) : (
            <View style={[styles.successView]}>
              <Text style={[styles.successMsg]}>
                News Submitted Successfully!
              </Text>
            </View>
          ))}
      </View>
    </SafeAreaView>
  );
};

export default PostNews;
