import { useState } from 'react';

import useFirestore from './NewsProvider/useStore';

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

  const { addDataToStore } = useFirestore();

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

  const handleSubmit = async () => {
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

    const response = await addDataToStore(payload);

    if (response) {
      resetAll();
      setShowBanner(true);
      setTimeout(() => setShowBanner(false), 2000);
      setLoader(false);
    } else {
      setShowBanner(true);
      setError(true);
      setTimeout(() => setShowBanner(false), 500);
      setTimeout(() => setError(false), 500);
      setLoader(false);
    }
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
