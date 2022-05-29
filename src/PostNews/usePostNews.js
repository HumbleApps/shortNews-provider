import { useState } from 'react';

import useFirestore from '../NewsProvider/useStore';

const usePostNews = props => {
  const [title, setTitle] = useState(props?.title);
  const [description, setDescription] = useState(props?.description);
  const [imageUrl, setImageUrl] = useState(props?.imageUrl);
  const [author, setAuthor] = useState(props?.author);
  const [source, setSource] = useState(props?.source);
  const [articleUrl, setArticleUrl] = useState(props?.articleUrl);

  const [showBanner, setShowBanner] = useState(false);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);

  const { addDataToStore, updateDataToStore } = useFirestore();

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
      title: title?.trim(),
      description: description?.trim(),
      imageUrl: imageUrl?.trim(),
      author: author?.trim(),
      source: source?.trim(),
      articleUrl: articleUrl?.trim(),
      timestamp: props.timestamp || new Date().getTime(),
    };

    setLoader(true);

    let response;
    if (props?.id) {
      response = await updateDataToStore(props?.id, payload);
    } else {
      response = await addDataToStore(payload);
    }

    if (response) {
      resetAll();
      setShowBanner(true);
      setTimeout(() => setShowBanner(false), 2000);
      setLoader(false);
      props?.onCancel && setTimeout(() => props.onCancel(), 2100);
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
