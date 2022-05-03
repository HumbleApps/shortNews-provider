import { useContext } from 'react';

import Context from './Context';

const useFirestore = () => useContext(Context);

export default useFirestore;
