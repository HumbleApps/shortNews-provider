import React, { useState } from 'react';

import { SafeAreaView, ScrollView } from 'react-native';

import { Incubator, Colors, Button, LoaderScreen } from 'react-native-ui-lib';

import firestore from '@react-native-firebase/firestore';

import styles from './PostNews.styles';

const { TextField, Toast } = Incubator;

const PostNews = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [author, setAuthor] = useState('');
  const [source, setSource] = useState('');
  const [articleUrl, setArticleUrl] = useState('');

  const [showBanner, setShowBanner] = useState(false);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);

  const isSubmitDisabled =
    title && description && imageUrl && author && source && articleUrl;

  const resetAll = () => {
    setTitle('');
    setDescription('');
    setImageUrl('');
    setAuthor('');
    setSource('');
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
      timestamp: new Date().getTime(),
    };

    setLoader(true);

    firestore()
      .collection('news')
      .add(payload)
      .then(() => {
        console.log('News added!');
        resetAll();
        setShowBanner(true);
        setTimeout(() => setShowBanner(false), 2000);
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
    <SafeAreaView style={[styles.safeAreaContainer]}>
      <Toast
        visible={!loader && showBanner}
        position={'bottom'}
        message={'News Submitted Successfully!'}
        preset={'success'}
        centerMessage
        autoDismiss={2000}
        onDismiss={() => setShowBanner(false)}
      />

      <Toast
        visible={showBanner && error}
        position={'bottom'}
        preset={'error'}
        message={'Please try again or check your internet!'}
        centerMessage
        autoDismiss={2000}
        onDismiss={() => setShowBanner(false) && setError(false)}
      />

      <ScrollView
        style={[styles.container]}
        contentContainerStyle={[styles.scrollViewContentContainer]}>
        {loader && <LoaderScreen message="Submitting..." />}
        <TextField
          placeholder={'Title'}
          autoFocus
          multiline
          floatingPlaceholder
          floatingPlaceholderColor={Colors.blue50}
          floatingPlaceholderStyle={[styles.floatingPlaceholderStyle]}
          fieldStyle={[styles.fieldStyle]}
          onChangeText={e => setTitle(e)}
          value={title}
          style={[styles.fieldText]}
          showCharCounter
          maxLength={100}
        />
        <TextField
          placeholder={'Description'}
          multiline
          spellCheck={false}
          floatingPlaceholder
          floatingPlaceholderColor={Colors.blue50}
          floatingPlaceholderStyle={[styles.floatingPlaceholderStyle]}
          fieldStyle={[styles.fieldStyle]}
          onChangeText={e => setDescription(e)}
          value={description}
          style={[styles.fieldText]}
          showCharCounter
          maxLength={500}
        />
        <TextField
          placeholder={'Author'}
          multiline
          floatingPlaceholder
          floatingPlaceholderColor={Colors.blue50}
          floatingPlaceholderStyle={[styles.floatingPlaceholderStyle]}
          fieldStyle={[styles.fieldStyle]}
          onChangeText={e => setAuthor(e)}
          value={author}
          style={[styles.fieldText]}
          showCharCounter
          maxLength={30}
        />
        <TextField
          placeholder={'News Source'}
          multiline
          floatingPlaceholder
          floatingPlaceholderColor={Colors.blue50}
          floatingPlaceholderStyle={[styles.floatingPlaceholderStyle]}
          fieldStyle={[styles.fieldStyle]}
          onChangeText={e => setSource(e)}
          value={source}
          style={[styles.fieldText]}
          showCharCounter
          maxLength={30}
        />
        <TextField
          placeholder={'Image URL'}
          multiline
          autoCapitalize={'none'}
          floatingPlaceholder
          floatingPlaceholderColor={Colors.blue50}
          floatingPlaceholderStyle={[styles.floatingPlaceholderStyle]}
          fieldStyle={[styles.fieldStyle]}
          onChangeText={e => setImageUrl(e)}
          value={imageUrl}
          style={[styles.fieldText]}
        />
        <TextField
          placeholder={'News Source Article URL'}
          multiline
          autoCapitalize={'none'}
          floatingPlaceholder
          floatingPlaceholderColor={Colors.blue50}
          floatingPlaceholderStyle={[styles.floatingPlaceholderStyle]}
          fieldStyle={[styles.fieldStyle]}
          onChangeText={e => setArticleUrl(e)}
          value={articleUrl}
          style={[styles.fieldText]}
        />
        {!showBanner && (
          <Button
            label={'Submit News'}
            size={Button.sizes.large}
            backgroundColor={Colors.blue50}
            style={[styles.submit]}
            disabled={!isSubmitDisabled}
            onPress={handleSubmit}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default PostNews;
