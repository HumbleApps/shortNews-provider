import React, { useEffect, useState } from 'react';
import Context from './Context';

import firestore from '@react-native-firebase/firestore';

const Provider = ({ children }) => {
  const [newsData, setNewsData] = useState(null);
  const ref = firestore().collection('news');

  //   getDataFromStore
  const getDataFromStore = async () => {
    const allNews = await ref.get();

    const tmpData = [];
    allNews.forEach(doc => {
      tmpData.push({ id: doc.id, ...doc.data() });
    });
    setNewsData(tmpData);
  };

  //  addDataToStore
  const addDataToStore = async payload => {
    const res = await ref.add(payload);
    console.log(res.id);
    return res.id;
  };

  const deleteDataFromStore = id => {
    ref.doc(id).delete();
    const remainingData = newsData.filter(doc => doc.id !== id);
    setNewsData(remainingData);
  };

  useEffect(() => {
    getDataFromStore();
  }, []);

  return (
    <Context.Provider
      value={{
        newsData,
        addDataToStore,
        getDataFromStore,
        deleteDataFromStore,
      }}>
      {children}
    </Context.Provider>
  );
};

export default Provider;
