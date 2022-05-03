import React, { useEffect, useState } from 'react';
import Context from './Context';

import firestore from '@react-native-firebase/firestore';

const Provider = ({ children }) => {
  const [newsData, setNewsData] = useState(null);
  const ref = firestore().collection('news');

  //   getDataFromStore
  const getDataFromStore = async () => {
    try {
      const allNews = await ref.get();

      const tmpData = [];
      allNews.forEach(doc => {
        tmpData.push({ id: doc.id, ...doc.data() });
      });
      tmpData.sort((a, b) => b.timestamp - a.timestamp);
      setNewsData(tmpData);
    } catch (error) {
      return false;
    }
  };

  //  addDataToStore
  const addDataToStore = async payload => {
    try {
      const res = await ref.add(payload);
      console.log(res.id);
      const updatedData = [...newsData, { id: res.id, ...payload }];
      updatedData.sort((a, b) => b.timestamp - a.timestamp);
      setNewsData(updatedData);
      return res.id;
    } catch (error) {
      return false;
    }
  };

  const updateDataToStore = async (docID, payload) => {
    try {
      await ref.doc(docID).update(payload);
      const remainingItems = newsData.filter(item => item?.id !== docID);
      const updatedData = [...remainingItems, { ...payload, id: docID }];
      updatedData.sort((a, b) => b.timestamp - a.timestamp);
      setNewsData(updatedData);
      return true;
    } catch (error) {
      return false;
    }
  };

  const deleteDataFromStore = id => {
    try {
      ref.doc(id).delete();
      const remainingData = newsData.filter(doc => doc.id !== id);
      setNewsData(remainingData);
    } catch (error) {
      return false;
    }
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
        updateDataToStore,
      }}>
      {children}
    </Context.Provider>
  );
};

export default Provider;
