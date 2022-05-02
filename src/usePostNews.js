import { useState } from 'react';

import firestore from '@react-native-firebase/firestore';

const usePostNews = () => {
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

  return {
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
  };
};

export default usePostNews;
