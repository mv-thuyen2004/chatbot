// src/MyContext.js
import React, { createContext } from 'react';

const MyContext = createContext({
  data: { name: 'John Doe', age: 30 },
});

export default MyContext;