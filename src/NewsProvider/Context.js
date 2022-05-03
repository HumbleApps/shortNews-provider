import React from 'react';

const Context = React.createContext(null);

if (process.env.NODE_ENV !== 'production') Context.displayName = 'NewsContext';

export default Context;
