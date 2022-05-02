import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { Incubator, Colors, Button } from 'react-native-ui-lib';

import styles from './PostNews.styles';
import usePostNews from './usePostNews';

const { TextField, Toast } = Incubator;

const PostNews = () => {
  const {
    title,
    setTitle,
    description,
    setDescription,
    imageUrl,
    setImageUrl,
    author,
    setAuthor,
    source,
    setSource,
    articleUrl,
    setArticleUrl,
    showBanner,
    setShowBanner,
    error,
    setError,
    loader,
    setLoader,
    isSubmitDisabled,
    handleSubmit,
  } = usePostNews();

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
            label={loader ? 'Submitting...' : 'Submit News'}
            size={Button.sizes.large}
            backgroundColor={Colors.blue50}
            style={[styles.submit]}
            disabled={!isSubmitDisabled || loader}
            onPress={handleSubmit}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default PostNews;
